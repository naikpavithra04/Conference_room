const User = require("../models/User");
const Room = require("../models/Room");
const Booking=require("../models/Booking");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config/env");

/* ================= REGISTER ================= */


exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already registered with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

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
   console.log("LOGIN CONTROLLER HIT"); 
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // ✅ FIX IS HERE
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

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

    const bookings = await Booking
      .find({ email })
      .populate("roomId");

    res.json(bookings); // ✅ MUST BE ARRAY

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};