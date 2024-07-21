const express = require("express");
const mongoose = require("mongoose");
const events = require("./routes/events");
const app = express();
require("dotenv").config();

const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.use("/events", events);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get("/", (req, res) => {
  console.log(db);
  res.send("Hello World!");
});
