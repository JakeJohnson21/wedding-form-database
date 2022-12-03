const express = require("express");
const { getHotel, createHotel } = require("../controllers/hotel");
const router = express.Router();

router.post("/", createHotel);
router.get("/", getHotel);

module.exports = router;
