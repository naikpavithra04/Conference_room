const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

/* rooms */
router.get("/rooms", userController.getRooms);

/* booking */
router.post("/book", userController.bookRoom);

/* my bookings */
router.get("/bookings/:email", userController.getMyBookings);

module.exports = router;