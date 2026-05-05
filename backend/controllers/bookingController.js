const Booking = require("../models/Booking");

// ✅ Book a room
exports.bookRoom = async (req, res) => {
  try {
    const { roomId, date, time, paymentStatus, email } = req.body;

    const userEmail = req.user?.email || email;
    const userId = req.user?.id;

    if (!userEmail) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const existingBooking = await Booking.findOne({
      room: roomId,
      date,
      time,
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "Room already booked for this time",
      });
    }

    let finalPaymentStatus = "pending";
    let transactionId = null;

    if (paymentStatus === "paid") {
      finalPaymentStatus = "paid";
      transactionId = "TXN_" + Date.now();
    }

    const newBooking = new Booking({
      room: roomId,
      date,
      time,
      email: userEmail,
      user: userId,
      paymentStatus: finalPaymentStatus,
      transactionId,
      status: "pending",
    });

    const saved = await newBooking.save();

    res.json({
      message: "Room booked successfully",
      booking: saved,
    });

  } catch (error) {
    console.error("BOOKING ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ ADD THIS (VERY IMPORTANT)
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("room")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    console.error("FETCH BOOKINGS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};