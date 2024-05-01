const { User } = require('../models/user');
const { Event } = require('../models/event');
const generateToken = require('../service/tokenService');
const { sendConfirmationEmail } = require('../service/emailService');

const createUser = async (req, res) => {
  const { login, password, email } = req.body;

  try {
    // Перевіряємо, чи існує користувач з таким логіном або емейлом
    const existingUser = await User.findOne({ login });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this login already exists' });
    }

    // Створюємо нового користувача
    const user = new User({
      login: login,
      password: password,
      email: email,
      events: []
    });

    // Генеруємо токен для підтвердження
    const confirmationToken = generateToken();
    user.confirmationToken = confirmationToken;

    // Зберігаємо користувача у базу даних
    const result = await user.save();

    // Відправляємо лист з підтвердженням на емейл користувача
    await sendConfirmationEmail(email, confirmationToken);

    return res.status(201).json({ data: result, message: "User successfully created! Check your email for confirmation." });

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

module.exFports = { createUser, addEventToUser };
