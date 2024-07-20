// const db = require("../db/conn.js");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("get events");
//   const results = await db.collection("events").findOne({});
//   res.send(results).status(200).end();
});

module.exports = router;
