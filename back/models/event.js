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
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  placeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]

}, { timestamps: true })

const Event = mongoose.model('event', eventSchema);

module.exports = { Event, eventSchema };

