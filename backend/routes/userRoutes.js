const express = require("express");
const router = express.Router();
const User = require("../models/user");

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      role: "user"
    });

    await newUser.save();

    res.json({ message: "User Registered Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// User Login
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email, password, role: "user" });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    user
  });
});

module.exports = router;