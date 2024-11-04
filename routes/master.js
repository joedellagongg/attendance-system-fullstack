const express = require("express");
const router = express.Router();
const cors = require("cors");

const attendanceRoute = require("./attendance.route");

const corsSetting = {
    credentials: true,
    origin: "http://127.0.0.1:5500",
};
const registeredRoute = (app) => {
    app.use(cors(corsSetting));
    app.use("/", attendanceRoute);
};
module.exports = registeredRoute;
