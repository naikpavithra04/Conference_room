const Booking = require("../models/Booking");

exports.generateReport = async () => {
  const total = await Booking.countDocuments();
  const approved = await Booking.countDocuments({ status: "approved" });
  const pending = await Booking.countDocuments({ status: "pending" });
  return { total, approved, pending };
};
