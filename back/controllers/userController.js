const User = require('../models/user');
const { Event } = require('../models/event');

const createUser = async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = new User({
      login: login,
      password: password,
      events: []
    });

    const result = await user.save();

    return res.status(201).json({ data: result, message: "User successfully created!" });

  } catch (error) {
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
    const event = await Event.findById(eventId);


    event.users.push(login);
    await event.save();

    user.events.push(event);
    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
}


module.exports = { createUser, addEventToUser };