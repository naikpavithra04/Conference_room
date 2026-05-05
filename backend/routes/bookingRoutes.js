const router = require("express").Router();
const Booking = require("../models/Booking");
const { authMiddleware } = require("../middleware/authMiddleware");

const {
  bookRoom,
  getMyBookings
} = require("../controllers/bookingController");

// DEBUG
console.log(bookRoom, getMyBookings, authMiddleware);

// ✅ Create booking
router.post("/book", authMiddleware, bookRoom);

// ✅ Get ALL bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user room")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get user bookings
router.get("/my", authMiddleware, getMyBookings);

module.exports = router;