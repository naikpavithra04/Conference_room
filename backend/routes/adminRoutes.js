const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

console.log("ADMIN ROUTES LOADED");

/* ================= REPORTS ================= */

router.get("/reports", async (req, res) => {
  try {

    // TOTAL BOOKINGS
    const total = await Booking.countDocuments();

    // APPROVED BOOKINGS
    const approved = await Booking.countDocuments({
      status: "approved"
    });

    // PENDING BOOKINGS
    const pending = await Booking.countDocuments({
      status: "pending"
    });

    // ✅ REJECTED BOOKINGS
    const rejected = await Booking.countDocuments({
      status: "rejected"
    });

    res.json({
      total,
      approved,
      pending,
      rejected
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
});

/* ================= APPROVE BOOKING ================= */

router.post("/approve", async (req, res) => {
  try {

    const { id } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        status: "approved"
      },
      {
        new: true
      }
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      message: "Booking approved",
      booking
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
});

/* ================= REJECT BOOKING ================= */

router.post("/reject", async (req, res) => {
  try {

    const { id } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        status: "rejected"
      },
      {
        new: true
      }
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      message: "Booking rejected",
      booking
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;