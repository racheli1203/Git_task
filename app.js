
const express = require("express");
const mongoose = require("mongoose"); 
require('dotenv').config();

const app = express();
const port = 8085;
const bodyParser = require("body-parser");
const userRouter = require("./router/routing");

app.use(bodyParser.json());
app.use("/users", userRouter);

// mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB database");
  app.listen(port, () => {
    console.log("App is running!!");
  });
});