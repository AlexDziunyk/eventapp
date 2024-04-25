const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
  events: [{ type: Schema.Types.ObjectId, ref: "event" }]

}, { timestamps: true })

const User = mongoose.model('user', userSchema);

module.exports = { User, userSchema };

