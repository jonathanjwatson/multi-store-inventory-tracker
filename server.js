const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ItemController = require("./controllers/itemController");
const StoreController = require("./controllers/storeController");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/multi-store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose successfully connected");
  })
  .catch((err) => {
    console.log("Mongoose failed to connect.");
    console.logg(err);
  });

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(ItemController);
app.use(StoreController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
