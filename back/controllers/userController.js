const { User } = require('../models/user');
const { Event } = require('../models/event');
const generateToken = require('../tokenService');
const { sendConfirmationEmail } = require('../emailService');

const createUser = async (req, res) => {
  const { login, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ login }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this login or email already exists' });
    }

    const user = new User({
      login: login,
      password: password,
      email: email,
      events: []
    });

    const confirmationToken = generateToken();
    user.confirmationToken = confirmationToken;

    const result = await user.save();

    await sendConfirmationEmail(email, confirmationToken);

    return res.status(201).json({ data: result, message: "User successfully created! Check your email for confirmation." });

  } catch (error) {
    console.log(error)
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

module.exports = { createUser, addEventToUser };
