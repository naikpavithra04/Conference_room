const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  name: String,
  email: String,
  date: String,
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Booking", bookingSchema);