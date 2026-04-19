const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

console.log("ADMIN ROUTES LOADED");

// ✅ Reports
router.get("/reports", async (req, res) => {
  try {
    const total = await Booking.countDocuments();
    const approved = await Booking.countDocuments({ status: "approved" });
    const pending = await Booking.countDocuments({ status: "pending" });

    res.json({ total, approved, pending });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ APPROVE booking
router.post("/approve", async (req, res) => {
  try {
    const { id } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: "approved" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking approved", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// ✅ REJECT booking
router.post("/reject", async (req, res) => {
  try {
    const { id } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: "rejected" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking rejected", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;