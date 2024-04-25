const express = require('express');
const router = express.Router();

const { addCommentToEvent, getCommentsForEvent } = require('../controllers/commentController');

router.post("/addComment/:eventId", addCommentToEvent);
router.get("/getComments/:eventId", getCommentsForEvent);

module.exports = router;
