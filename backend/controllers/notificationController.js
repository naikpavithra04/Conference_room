const Notification = require("../models/Notification");

exports.sendNotification = async (req, res) => {
  const note = await Notification.create(req.body);
  res.json(note);
};
