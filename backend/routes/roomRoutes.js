const router = require("express").Router();

const {
  addRoom,
  getRooms,
  deleteRoom
} = require("../controllers/roomController");

// CRUD routes
router.get("/", getRooms);
router.post("/", addRoom);
router.delete("/:id", deleteRoom);

module.exports = router;