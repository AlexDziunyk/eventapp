// const User = require('../models/user');
const { Event } = require('../models/event');
const path = require('path');
const User = require('../models/user');

const createEvent = async (req, res) => {
  const { price, title, date, lat, lng, placeName, description, format, theme } = req.body;

  const filePath = req.file ? path.basename(req.file.path) : "event.jpg";
  const { login } = req.login;
  console.log(login)

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

const getUsersForEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const eventWithUsers = await Event.findById(eventId).populate('users');

    return res.status(200).json({ result: eventWithUsers.users, message: "Users were found for this event!" });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message, message: "No users for such event!" });
  }

}


const getTicketsForUser = async (req, res) => {
  const { login } = req.login;
  try {
    const user = await User.findOne({ login: login }).populate("tickets");
    return res.status(200).json({ result: user.tickets, message: "Tickets were found for this user!" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message, message: "No tickets for such user!" });
  }
}


module.exports = { createEvent, deleteEventById, getAllEvents, getEventById, getUsersForEvent, getTicketsForUser };