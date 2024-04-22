const express = require('express');
const router = express.Router();

const { createEvent, createComment, deleteEventById, getAllEvents, getEventById } = require('../controllers/eventController');
const { imageUpload } = require('../middlewares/imageUpload');

router.get("/all", getAllEvents);
router.get("/getEventById/:eventId", getEventById);
router.post('/createEvent', imageUpload.single('image'), createEvent);
router.post('/createComment/:eventId', createComment)
router.delete('/deleteEventById', deleteEventById);

module.exports = router;
