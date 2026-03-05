const router = require("express").Router();
const { sendNotification } = require("../controllers/notificationController");
router.post("/", sendNotification);
module.exports = router;
