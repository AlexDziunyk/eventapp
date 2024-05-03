const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const notificationsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Notification = mongoose.model('notification', notificationsSchema);

module.exports = Notification;

