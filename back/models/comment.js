const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  user: { type: Schema.Types.ObjectId, ref: "user" }
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = { Comment, commentSchema };


