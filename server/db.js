const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection
const dbconnect = () => {
  const uri = process.env.MONGODB_URI;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err);
    });
};

module.exports = dbconnect;
