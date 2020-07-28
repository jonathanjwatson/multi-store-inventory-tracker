const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/stores", (req, res) => {
  db.Store.find({})
    .populate({
      path: "products",
      populate: {
        path: "itemId",
        model: "Item",
      },
    })
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

router.get("/api/stores/:id", (req, res) => {
  db.Store.findById(req.params.id)
    .populate({
      path: "products",
      populate: {
        path: "itemId",
        model: "Item",
      },
    })
    .then((foundStore) => {
      res.json({
        error: false,
        data: foundStore,
        message: "Store retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve store.",
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

router.put("/api/stores/:id", (req, res) => {
  db.Store.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedStore) => {
      res.json({
        error: false,
        data: updatedStore,
        message: "Successfully updated store.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update store.",
      });
    });
});

module.exports = router;
