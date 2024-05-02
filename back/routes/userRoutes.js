const express = require('express');
const router = express.Router();
const { loginUser, createUser, addEventToUser } = require('../controllers/userController');
const { tokenVerify } = require('../middlewares/tokenVerify');

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/addEventToUser', tokenVerify, addEventToUser);

module.exports = router;
