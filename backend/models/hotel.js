const { default: mongoose } = require("mongoose");
const validator = require("validator");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 40,
  },
  address: {
    type: String,
    required: true,
    minlength: 10,
  },
  distance: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
    validate: {
      validator: (value) => validator.isURL(value),
      message: "Must be a valid URL",
    },
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("hotel", hotelSchema);
