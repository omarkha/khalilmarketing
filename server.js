const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const path = require("path");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
require("dotenv").config(); // Add this line
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/client/build`));

const port = 4444;

app.get("/", (req, res) => {
  res.send("Api running");
});

const mongoose = require("mongoose");
require("dotenv").config(); // Add this line

let dbUrl =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://Copyres:Soridl846@cluster0.ohmco.mongodb.net/"
    : "mongodb://127.0.0.1:27017/marketingdb";

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
mongoose.set("debug", true);
mongoose.connection;

// Routes
app.use("/api/subscribers", require("./routes/subscriberRoutes"));

//
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
