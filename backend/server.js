const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/protfilo_2", {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/user.route');
const placeRouter = require('./routes/place.route');

app.use('/newuser', userRouter);
app.use('/newplace', placeRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});