const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Item name is required.",
  },
  products: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
      currentStock: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
