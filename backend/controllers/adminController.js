const Booking = require("../models/Booking");

/* ================= APPROVE BOOKING ================= */

exports.approveBooking = async (req, res) => {
  try {

    const booking = await Booking.findById(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    booking.status = "approved";

    await booking.save();

    res.json({
      message: "Booking approved",
      booking
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

/* ================= REJECT BOOKING ================= */

exports.rejectBooking = async (req, res) => {
  try {

    const booking = await Booking.findById(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    booking.status = "rejected";

    await booking.save();

    res.json({
      message: "Booking rejected",
      booking
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

/* ================= REPORTS ================= */

exports.getReports = async (req, res) => {
  try {

    // TOTAL BOOKINGS
    const total = await Booking.countDocuments();

    // APPROVED
    const approved = await Booking.countDocuments({
      status: "approved"
    });

    // PENDING
    const pending = await Booking.countDocuments({
      status: "pending"
    });

    // REJECTED
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
    res.status(500).json({
      message: error.message
    });
  }
};