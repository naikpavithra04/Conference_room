const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // ✅ USER
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // ✅ ROOM
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true
    },

    // ✅ EMAIL
    email: {
      type: String,
      required: true
    },

    // ✅ BOOKING DATE
    date: {
      type: String,
      required: true
    },

    // ✅ BOOKING TIME
    time: {
      type: String,
      required: true
    },

    // ✅ BOOKING STATUS
    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected",
        "cancelled"
      ],
      default: "pending"
    },

    // ✅ PAYMENT STATUS
    paymentStatus: {
      type: String,
      enum: [
        "pending",
        "paid",
        "failed"
      ],
      default: "pending"
    },

    // ✅ NEW PAYMENT METHOD
    paymentMethod: {
      type: String,
      enum: [
        "upi",
        "card",
        "netbanking",
        "cash"
      ],
      default: "upi"
    },

    // ✅ OPTIONAL TRANSACTION ID
    transactionId: {
      type: String,
      default: null
    }

  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);