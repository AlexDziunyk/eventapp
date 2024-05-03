const express = require('express');
const router = express.Router();

const { getAllNotifications } = require('../controllers/notificationController');
const { tokenVerify } = require('../middlewares/tokenVerify');

router.get('/all', tokenVerify, getAllNotifications);

module.exports = router;