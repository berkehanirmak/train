const express = require("express");
const { getOccupancy } = require("../controller/occupancyController");

const router = express.Router();

router.get("/", getOccupancy);

module.exports = router;
