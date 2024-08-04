// server/models/Item.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  sellerName: String,
  description: String,
  image: String,
  price: Number,
  keywords: String,
  phoneNumber: Number,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
