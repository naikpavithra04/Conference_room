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
 
router.patch("/:id/cancel", authMiddleware, async (req, res) => { 
  try { 
    const booking = await Booking.findById(req.params.id); 
 
    if (!booking) { 
      return res.status(404).json({ message: "Booking not found" }); 
    } 
 
    // Only the owner can cancel 
    if (booking.user.toString() !== req.user.id) { 
      return res.status(403).json({ message: "Not authorized" }); 
    } 
 
    // Can't cancel already cancelled or rejected bookings 
    if (booking.status === "cancelled") { 
      return res.status(400).json({ message: "Booking already cancelled" }); 
    } 
 
    if (booking.status === "rejected") { 
      return res.status(400).json({ message: "Cannot cancel a rejected booking" }); 
    } 
 
    booking.status = "cancelled"; 
    await booking.save(); 
 
    res.json({ message: "Booking cancelled successfully", booking }); 
  } catch (err) { 
    res.status(500).json({ message: err.message }); 
  } 
}); 

// Get user bookings
router.get("/my", authMiddleware, getMyBookings);

module.exports = router;