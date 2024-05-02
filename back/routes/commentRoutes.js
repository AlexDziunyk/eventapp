const express = require('express');
const router = express.Router();

const { addCommentToEvent, getCommentsForEvent } = require('../controllers/commentController');
const { tokenVerify } = require('../middlewares/tokenVerify');

router.post("/addComment/:eventId", tokenVerify, addCommentToEvent);
router.get("/getComments/:eventId", getCommentsForEvent);

module.exports = router;
