const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const mongoDB = "mongodb+srv://alexdziunyk:Bop0R4wjSErnpvTc@cluster1.wfjlnqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

app.use(cors());
app.use(express.json());

mongoose.connect(mongoDB)
  .then(result => console.log("connected to db"))
  .catch(e => console.log(e));


app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

app.listen(3001, () => {
  console.log("Listening");
})
