const { randomUUID } = require("crypto");
const Hotel = require("../models/hotel");

const getHotel = async (req, res) => {
  const list = await Hotel.find({});
  try {
    res.status(200).send({ data: list });
  } catch (e) {
    console.error(e);
  }
};

const createHotel = async (req, res) => {
  const { name, address, url, description, distance, price } = req.body;
  const newId = randomUUID();

  const newHotel = await Hotel.create({
    id: newId,
    name,
    address,
    url,
    description,
    distance,
    price,
  });
  try {
    res.status(201).send({ data: newHotel });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getHotel, createHotel };
