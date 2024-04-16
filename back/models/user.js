const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { eventSchema } = require('./event.js');

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  events: {
    type: [{
      title: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true
      },
      location: String,
      description: String,
    }]
  }

}, { timestamps: true })

const User = mongoose.model('users', userSchema);

module.exports = User;

