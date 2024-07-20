const express = require("express");
const events = require("./routes/events");
const vars = require("./vars");
const app = express();

const port = vars.port;

app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.use("/events", events);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
