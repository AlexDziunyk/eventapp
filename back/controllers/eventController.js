const User = require('../models/user');
const { Event } = require('../models/event');

const createEvent = async (req, res) => {
  const { login, title, date, location, description } = req.body;

  try {
    const event = new Event({
      title: title,
      date: date,
      location: location,
      description: description,
      author: login,
      users: []
    });

    await event.save()
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


const deleteEventById = async (req, res) => {
  const { eventId } = req.body;

  try {
    const event = await Event.findByIdAndDelete(eventId);

    return;
  } catch (error) {
    throw error;
  }

}



module.exports = { createEvent, deleteEventById };