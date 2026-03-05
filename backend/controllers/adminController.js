const Booking = require("../models/Booking");

exports.approveBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = "approved";
  await booking.save();
  res.json(booking);
};

exports.rejectBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  booking.status = "rejected";
  await booking.save();
  res.json(booking);
};
