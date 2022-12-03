const { randomUUID } = require("crypto");
const fs = require("fs");
const path = require("path");
const Restaurant = require("../models/restaurant");

const getRestaurants = async (req, res) => {
  const list = await Restaurant.find({});
  try {
    res.status(200).send(list);
  } catch (e) {
    console.error(e);
  }
};

const createRestaurant = async (req, res) => {
  const { name, address, url, description, price, attire } = req.body;
  let newId = randomUUID();
  const newFood = await Restaurant.create({
    id: newId,
    name,
    address,
    url,
    description,
    price,
    attire,
  });
  try {
    res.status(201).send({ newFood });
  } catch (e) {
    console.error(e);
  }
};

const deleteRestaurant = async (req, res) => {
  const { postId } = req.params;
  const validFood = await Restaurant.findById(postId);
  try {
    if (validFood) {
      await Restaurant.deleteOne(validFood);
      res.send(validFood);
    }
    console.log(`Post with ID of ${postId} doesn't exist`);
  } catch (e) {
    console.error("Error: ", e.statusCode);
  }
};

module.exports = { getRestaurants, createRestaurant, deleteRestaurant };
