const express = require('express');
const router = express.Router();

const { createEvent, deleteEventById } = require('../controllers/eventController');
const { imageUpload } = require('../middlewares/imageUpload');

router.post('/createEvent', imageUpload.single('image'), createEvent);
router.delete('/deleteEventById', deleteEventById);

module.exports = router;
