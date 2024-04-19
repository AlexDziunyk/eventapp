const User = require('../models/user');
const { Event } = require('../models/event');

const createEvent = async (req, res) => {
  const { login, title, date, lat, lng, placeName, description, image, format, theme } = req.body;

  try {

    const filePath = req.file.path;

    const event = new Event({
      title: title,
      date: date,
      lat: lat,
      lng: lng,
      placeName: placeName,
      description: description,
      author: login,
      image: filePath,
      format: format,
      theme: theme,
      users: []
    });

    const result = await event.save();

    return res.status(201).json({ data: result, message: "Event successfully created!" });
    
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create an event",
      error: error.message
    });
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