const express = require('express');
const router = express.Router();

const { createUser, addEventToUser } = require('../controllers/userController');

router.post('/createUser', createUser);
router.put('/addEventToUser', addEventToUser);

module.exports = router;