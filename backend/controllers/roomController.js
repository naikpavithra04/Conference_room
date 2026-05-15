const Room = require("../models/Room");

/* ================= GET ALL ROOMS ================= */

exports.getRooms = async (req, res) => {
  try {

    const rooms = await Room.find();

    res.json(rooms);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
};

/* ================= ADD ROOM ================= */

exports.addRoom = async (req, res) => {
  try {

    const room = await Room.create(req.body);

    res.status(201).json(room);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
};

/* ================= UPDATE ROOM ================= */

exports.updateRoom = async (req, res) => {
  try {

    const updatedRoom =
      await Room.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    if (!updatedRoom) {
      return res.status(404).json({
        message: "Room not found"
      });
    }

    res.json(updatedRoom);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
};

/* ================= DELETE ROOM ================= */

exports.deleteRoom = async (req, res) => {
  try {

    const room =
      await Room.findByIdAndDelete(
        req.params.id
      );

    if (!room) {
      return res.status(404).json({
        message: "Room not found"
      });
    }

    res.json({
      message: "Room deleted"
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
};