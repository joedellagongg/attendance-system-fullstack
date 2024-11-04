const express = require("express");
const router = express.Router();

const attendanceControllers = require("../controllers/attendance.controller");

// router.get("/attendance", (req, res) => {
//     console.log("MAIN SERVER ENDPOINT");
//     res.send("ATTENDANCE SYSTEM ENDPOINT DITO KA NA GUMAWA NG ENDPOINT");
// });

router.get("/attendance", attendanceControllers.getAttendance);
router.post("/attendance", attendanceControllers.postAttendance);

module.exports = router;
