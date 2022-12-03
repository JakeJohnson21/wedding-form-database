const express = require("express");
const { createAdventure, getAdventure } = require("../controllers/play");
const router = express.Router();

router.post("/", createAdventure);
router.get("/", getAdventure);

module.exports = router;
