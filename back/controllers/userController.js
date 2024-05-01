const { User } = require('../models/user');
const { Event } = require('../models/event');
const generateToken = require('../service/tokenService');
const { sendConfirmationEmail } = require('../service/emailService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const createUser = async (req, res) => {
  
  const { login, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingUser = await User.findOne({ login });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this login already exists' });
    }

    const user = new User({
      login: login,
      password: hashedPassword,
      email: email,
      events: []
    });

    const confirmationToken = generateToken();
    user.confirmationToken = confirmationToken;

    const result = await user.save();

    await sendConfirmationEmail(email, confirmationToken);
    
    const secretKey = crypto.randomBytes(32).toString('hex');
    console.log('Devug test secret key:', secretKey);

    const token = jwt.sign({ userId: user.userId, login: user.login }, secretKey, { expiresIn: '1h' });

    return res.status(201).json({ data: result, message: "User successfully created! Check your email for confirmation!", token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create a user",
      error: error.message
    });
  }
}

const addEventToUser = async (req, res) => {
  const { login, eventId } = req.body;
  try {
    const user = await User.findOne({ login: login });
    const event = await Event.findByIdAndUpdate(eventId,
      { $addToSet: { users: user._id } },
      { new: true }
    );

    await User.findByIdAndUpdate(
      user._id,
      { $addToSet: { events: event._id } },
      { new: true }
    );

    return res.status(201).json({ message: "Event succesfully added to user!" });

  } catch (error) {
    res.status(500).json({ message: "Error adding event to user", error: error.message });
  }
}


const loginUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ login });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, login: user.login }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = { createUser, addEventToUser, loginUser};
