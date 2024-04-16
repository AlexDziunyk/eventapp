const express = require('express');
const router = express.Router();

const { createEvent, deleteEventById } = require('../controllers/eventController');

router.post('/createEvent', createEvent);
router.delete('/deleteEventById', deleteEventById);

module.exports = router;
