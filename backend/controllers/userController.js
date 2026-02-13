const User = require("../models/user");

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role
    });

    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
