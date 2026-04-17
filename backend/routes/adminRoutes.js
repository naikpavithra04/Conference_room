const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
console.log("ADMIN ROUTES LOADED");
router.get("/reports", async (req, res) => {
  try {
    const total = await Booking.countDocuments();
    const approved = await Booking.countDocuments({ status: "approved" });
    const pending = await Booking.countDocuments({ status: "pending" });

    res.json({
      total,
      approved,
      pending,
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;