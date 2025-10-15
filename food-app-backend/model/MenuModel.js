const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  title: String,
  brand: String,
  price: Number,
  rating: Number,
  image_url: String,
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);


