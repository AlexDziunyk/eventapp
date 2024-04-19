const express = require('express');
const router = express.Router();

const { createEvent, deleteEventById, getAllEvents } = require('../controllers/eventController');
const { imageUpload } = require('../middlewares/imageUpload');

router.get("/all", getAllEvents);
router.post('/createEvent', imageUpload.single('image'), createEvent);
router.delete('/deleteEventById', deleteEventById);

module.exports = router;
