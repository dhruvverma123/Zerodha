const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = Holding;
