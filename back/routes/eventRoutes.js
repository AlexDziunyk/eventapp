const express = require('express');
const router = express.Router();

const { createEvent, deleteEventById, getAllEvents, getEventById, getUsersForEvent, getTicketsForUser } = require('../controllers/eventController');
const { imageUpload } = require('../middlewares/imageUpload');
const { tokenVerify } = require('../middlewares/tokenVerify');

router.get("/all", getAllEvents);
router.get("/getEventById/:eventId", getEventById);
router.get("/getUsers/:eventId", getUsersForEvent);
router.post('/createEvent', imageUpload.single('image'), tokenVerify, createEvent);
router.delete('/deleteEventById', deleteEventById);

router.get("/tickets", tokenVerify, getTicketsForUser);

module.exports = router;
