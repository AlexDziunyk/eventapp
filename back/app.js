const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const commentRoutes = require('./routes/commentRoutes');

const mongoDB = "mongodb+srv://alexdziunyk:Bop0R4wjSErnpvTc@cluster1.wfjlnqc.mongodb.net/uevent?retryWrites=true&w=majority&appName=Cluster1";

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(mongoDB)
  .then(result => console.log("connected to db"))
  .catch(e => console.log(e));

app.get('/confirm', async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ confirmationToken: token });

    if (!user) {
      return res.status(400).json({ error: 'Invalid confirmation token' });
    }

    user.confirmed = true;
    user.confirmationToken = undefined;
    await user.save();

    return res.status(200).json({ message: 'Account confirmed successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/comments', commentRoutes);

app.listen(3001, () => {
  console.log("Listening");
})
