const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" }, // ✅ correct

    email: String,
    date: String,
    time: String,

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);