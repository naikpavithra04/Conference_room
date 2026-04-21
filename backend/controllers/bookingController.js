const Booking = require("../models/Booking");

exports.bookRoom = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { roomId, date, time, email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await Booking.findOne({ room: roomId, date, time });

    if (existing) {
      return res.status(400).json({
        message: "Room already booked for this time",
      });
    }

    const booking = new Booking({
      room: roomId,
      date,
      time,
      email,
    });

    const saved = await booking.save();

    console.log("SAVED:", saved);

    res.json({ message: "Room booked successfully", booking: saved });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const { email } = req.query;

    const bookings = await Booking.find({ email }).populate("room");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};