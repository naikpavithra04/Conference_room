const User = require("../models/user");
const jwt = require("jsonwebtoken");

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// LOGIN USER


const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  registerUser,
  loginUser,
  getAllUsers
};