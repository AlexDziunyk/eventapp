const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  lat: String,
  lng: String,
  placeName: String,
  description: String,
  author: String,
  image: String,
  format: String,
  theme: String,
  price: String,
  users: [String]

}, { timestamps: true })

const Event = mongoose.model('events', eventSchema);

module.exports = { Event, eventSchema };

