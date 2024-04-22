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
  lat: Number,
  lng: Number,
  placeName: String,
  description: String,
  author: String,
  image: String,
  format: String,
  theme: String,
  price: String,
  users: [String],
  comments: [{
    author: String,
    description: String,
  }]

}, { timestamps: true })

const Event = mongoose.model('events', eventSchema);

module.exports = { Event, eventSchema };

