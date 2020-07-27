const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/stores", (req, res) => {
  db.Store.find({})
    .then((foundStores) => {
      res.json({
        error: false,
        data: foundStores,
        message: "All stores retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all stores.",
      });
    });
});

router.post("/api/stores", (req, res) => {
  db.Store.create(req.body)
    .then((createdStore) => {
      res.json({
        error: false,
        data: createdStore,
        message: "Successfully added new stores.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new stores.",
      });
    });
});

module.exports = router;
