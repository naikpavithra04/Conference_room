const Booking = require("../models/Booking");

exports.bookRoom = async (req, res) => {
  try {
    const { roomId, date, time } = req.body;

    // ❌ Check if already booked
    const existing = await Booking.findOne({ roomId, date, time });

    if (existing) {
      return res.status(400).json({
        message: "Room already booked for this time",
      });
    }

    const booking = new Booking({
      roomId,
      date,
      time,
    });

    await booking.save();

    res.json({ message: "Room booked successfully", booking });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};