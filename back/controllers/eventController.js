const User = require('../models/user');
const { Event } = require('../models/event');
const path = require('path');

const createEvent = async (req, res) => {
  const { login, price, title, date, lat, lng, placeName, description, image, format, theme } = req.body;

  const filePath = req.file ? path.basename(req.file.path) : "event.jpg";

  try {
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
      price: price,
      users: [],
      comments: []
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

const createComment = async (req, res) => {
  const { author, description } = req.body;
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId); 
    event.comments.push({
      author,
      description
    });
    await event.save();

    return res.status(201).json({ message: "Comment was successfully added" });

  } catch (error) {
    return res.status(500).json({ message: "Something bad happened!" });
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

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();

    return res.status(200).json({ result: events, message: "Events were successfully loaded!" });
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Something went wrong!" });
  }
}

const getEventById = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);

    return res.status(200).json({ result: event, message: "Event successfully loaded!" });
  } catch (error) {
    return res.status(500).json({ error: error.message, message: "Such event wasn't found" });
  }
}



module.exports = { createEvent, createComment, deleteEventById, getAllEvents, getEventById };