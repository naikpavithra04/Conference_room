const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().populate("user room");
  res.json(bookings);
};
