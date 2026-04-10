const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: String,
  type: String,
  price: Number,
});

module.exports = mongoose.model("Room", roomSchema);