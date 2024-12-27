const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

const app = express();

dotenv.config();

connectDB()
  .then(() => {
    console.log("DB connected successfully..!");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is successfully listening on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("DB connection rejected...!", err);
  });
