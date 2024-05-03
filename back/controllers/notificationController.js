const User = require('../models/user');

const getAllNotifications = async (req, res) => {
  const { login } = req.login;

  try {
    const user = await User.find({ login: login }).populate('notifications');

    return res.status(200).json({ result: user.notifications, message: "Notifications were found!" });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message, message: "No Notifications for such user!" });
  }
}

module.exports = { getAllNotifications };