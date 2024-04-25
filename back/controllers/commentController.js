const { User } = require('../models/user');
const { Event } = require('../models/event');
const { Comment } = require('../models/comment');

const addCommentToEvent = async (req, res) => {
  const { userId, author, content } = req.body;
  const { eventId } = req.params;

  try {
    const comment = new Comment({
      author: author,
      content,
      user: userId
    });

    const savedComment = await comment.save();

    const event = await Event.findByIdAndUpdate(eventId,
      { $push: { comments: savedComment._id } },
      { new: true }
    ).populate('comments');

    return res.status(201).json({ result: event, message: "Comment was successfully added" });

  } catch (error) {
    return res.status(500).json({ message: "Something bad happened!" });
  }
}

const getCommentsForEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const eventWithComments = await Event.findById(eventId).populate('comments');

    return res.status(200).json({ result: eventWithComments.comments, message: "Comments were found for this event!" });

  } catch (error) {
    return res.status(500).json({ error: error.message, message: "No comments for such event!" });
  }
}

module.exports = { addCommentToEvent, getCommentsForEvent };
