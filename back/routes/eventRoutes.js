const express = require('express');
const router = express.Router();

const { createEvent, deleteEventById, getAllEvents, getEventById, getUsersForEvent } = require('../controllers/eventController');
const { imageUpload } = require('../middlewares/imageUpload');

router.get("/all", getAllEvents);
router.get("/getEventById/:eventId", getEventById);
router.get("/getUsers/:eventId", getUsersForEvent);
router.post('/createEvent', imageUpload.single('image'), createEvent);
router.delete('/deleteEventById', deleteEventById);

module.exports = router;
