const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/userController');
const User = require('../models/User'); 

router.post('/register', async (req, res) => {
  try {
    const { login, password } = req.body;

    const existingUser = await User.findOne({ login });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this login already exists' });
    }

    const newUser = new User({ login, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', loginUser);

module.exports = router;
