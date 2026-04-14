const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

/* ================= LOGIN ================= */
router.post("/login", userController.login);

router.get("/test", (req, res) => {
  console.log("TEST ROUTE WORKING");
  res.send("User route working");
});
/* ================= ROOMS ================= */
router.get("/rooms", userController.getRooms);

/* ================= BOOKING ================= */
router.post("/book", userController.bookRoom);

/* ================= MY BOOKINGS ================= */
router.get("/bookings/:email", userController.getMyBookings);

module.exports = router;