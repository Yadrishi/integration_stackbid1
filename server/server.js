const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());

// const bodyParser = require("body-parser");
// app.use(bodyParser.json()); //saves it in req.body

const SignIn = require("./models/SignIn");
const SignUp = require("./models/SignUp");
// const Feedback = require("./models/Feedback");
// const HistorySeller = require("./models/HistorySeller");
app.get("/", function (req, res) {
  res.send("helloooo, welcome here!");
});

// app.get("/", function (req, res) => {
//   res.json("helloooo, welcome here!")
// });

//Import the router files
//const personRoutes = require('./routes/personRoutes');
const signInRoutes = require("./Routes/signinRoutes");
const signUpRoutes = require("./Routes/signupRoutes");
//const FeedbackRoutes = require("./Routes/FeedbackRoutes");
//const HistorySeller = require("./Routes/HistorySellerRoutes");

//Use the routers
app.use("/signIn", signInRoutes);
app.use("/signUp", signUpRoutes);
//app.use("/Feedback", FeedbackRoutes);
//app.use("/HistorySeller", HistorySeller);

app.listen(5000, () => {
  console.log("i am listening on port 5000");
});
