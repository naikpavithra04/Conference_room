const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  date: String,
  timeSlot: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Booking", bookingSchema);
