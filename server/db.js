const mongoose = require("mongoose");
//const mongoURL =process.env.MONGODBURL_LOCAL ; //replace 'fooddatabase' with your database
require("dotenv").config();
const mongoURL = process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongodb server");
});

db.on("error", (err) => {
  console.log("mongodb connection error");
});

db.on("disconnected", () => {
  console.log("disconnected from mongodb server");
});

module.exports = db;
