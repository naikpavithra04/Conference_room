const Payment = require("../models/Payment");
const Booking = require("../models/Booking");
const Room = require("../models/Room");

exports.makePayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    // Find booking
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    // Find room linked to booking
    const room = await Room.findById(booking.room);

    if (!room) {
      return res.status(404).json({
        message: "Room not found"
      });
    }

    // Get admin-set room price
    const amount = room.price;

    // Create payment
    const payment = await Payment.create({
      booking: bookingId,
      amount,
      status: "paid"
    });

    res.status(201).json(payment);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};