const express = require("express");
const {
  createRestaurant,
  getRestaurants,
  deleteRestaurant,
} = require("../controllers/restaurants");
const router = express.Router();

router.post("/", createRestaurant);
router.get("/", getRestaurants);
router.delete("/:postId", deleteRestaurant);

module.exports = router;
