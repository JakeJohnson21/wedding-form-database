const { randomUUID } = require("crypto");
const Adventure = require("../models/play");

const getAdventure = async (req, res) => {
  const list = Adventure.find({});
  try {
    res.send(200).send({ data: list });
  } catch (e) {
    console.error(e);
  }
};

const createAdventure = async (req, res) => {
  const { name, address, url, description, cost } = req.body;
  let newId = randomUUID();

  const newAdventure = await Adventure.create({
    id: newId,
    name,
    address,
    url,
    description,
    cost,
  });
  try {
    res.status(201).send({ data: newAdventure });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { createAdventure, getAdventure };
