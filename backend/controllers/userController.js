const User = require("../models/User");
const Room = require("../models/Room");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

/* ================= REGISTER ================= */
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });

    await user.save();

    res.json({
      message: "User Registered",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= LOGIN ================= */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.json({ message: "User not found" });

    if (user.password !== password)
      return res.json({ message: "Wrong password" });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      JWT_SECRET
    );

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ROOMS ================= */
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= BOOK ROOM ================= */
exports.bookRoom = async (req, res) => {
  try {
    res.json({ message: "Room booked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET MY BOOKINGS ================= */
exports.getMyBookings = async (req, res) => {
  try {
    const { email } = req.params;

    res.json({
      message: "Bookings fetched",
      email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};