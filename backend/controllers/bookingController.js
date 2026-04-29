const Booking = require("../models/Booking");

// ✅ Book a room (WITH payment support)
exports.bookRoom = async (req, res) => {
  try {
    const { roomId, date, time, paymentStatus } = req.body;

    const userEmail = req.user.email;
    const userId = req.user.id;

    // ✅ Check if already booked
    const existing = await Booking.findOne({
      room: roomId,
      date,
      time,
    });

    if (existing) {
      return res.status(400).json({
        message: "Room already booked for this time",
      });
    }

    // ✅ Handle payment
    let finalPaymentStatus = "pending";
    let transactionId = null;

    if (paymentStatus === "paid") {
      finalPaymentStatus = "paid";
      transactionId = "TXN_" + Date.now(); // fake transaction id
    }

    // ✅ Create booking
    const booking = new Booking({
      room: roomId,
      date,
      time,
      email: userEmail,
      user: userId,
      paymentStatus: finalPaymentStatus,
      transactionId: transactionId,
      status: "pending", // admin approval
    });

    const saved = await booking.save();

    res.json({
      message: "Room booked successfully",
      booking: saved,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get logged-in user's bookings
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("room")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};