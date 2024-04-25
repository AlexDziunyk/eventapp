const { User } = require('../models/user');
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