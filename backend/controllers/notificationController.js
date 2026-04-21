const Notification = require("../models/Notification");

// Create notification
exports.createNotification = async (email, message) => {
  await Notification.create({ email, message });
};

// Get notifications
exports.getNotifications = async (req, res) => {
  const { email } = req.query;

  const data = await Notification.find({ email }).sort({ createdAt: -1 });

  res.json(data);
};