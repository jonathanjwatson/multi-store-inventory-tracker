const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/items", (req, res) => {
  db.Item.find({})
    .then((foundItems) => {
      res.json({
        error: false,
        data: foundItems,
        message: "All items retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all items.",
      });
    });
});

router.post("/api/items", (req, res) => {
  db.Item.create(req.body)
    .then((createdItem) => {
      res.json({
        error: false,
        data: createdItem,
        message: "Successfully added new item.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new item.",
      });
    });
});

module.exports = router;
