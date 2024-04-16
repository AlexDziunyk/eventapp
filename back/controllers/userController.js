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

    await user.save()
      .then(result => {
        console.log(result);
      })
      .catch(e => {
        console.log(e);
      })

    return;
  } catch (error) {
    throw error;
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