const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Room" 
  },

  email: String,

  date: String,
  time: String,

  // ✅ ADD THIS
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);