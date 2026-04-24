const router = require("express").Router();
const Booking = require("../models/Booking");
const { authMiddleware } = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

// ✅ Create booking (protected)
router.post("/book", authMiddleware, bookingController.bookRoom);

// ✅ Get ALL bookings (Admin)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user room")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get logged-in user's bookings
router.get("/my", authMiddleware, bookingController.getMyBookings);

module.exports = router;