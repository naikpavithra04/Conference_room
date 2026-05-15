const router = require("express").Router();

const {
  addRoom,
  getRooms,
  deleteRoom,
  updateRoom
} = require("../controllers/roomController");

// ================= GET ALL ROOMS =================
router.get("/", getRooms);

// ================= ADD ROOM =================
router.post("/", addRoom);

// ================= UPDATE ROOM =================
router.put("/:id", updateRoom);

// ================= DELETE ROOM =================
router.delete("/:id", deleteRoom);

module.exports = router;