const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "id:"],
  },
  name: {
    type: String,
    required: [true, "Please enter product name:"],
  },
  description: {
    type: String,
    required: [true, "please enter product description:"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price:"],
  },
  totalprice: {
    type: Number,
    required: [true, "Please enter product totalprice:"],
  },
  quantity:{
    type:Number,
    required:[true, "Please enter product quantity:"]
  },
  image: {
    type: String,
    required: [true],
  },
  category: {
    type: String,
    required: [true, "please enter product category:"],
  },
  subCategory: {
    type: String,
    required: [true, "please enter product sub category:"],
  },
  quantity: {
    type: Number,
    required: [true, "Number of items:"],
  },
});

module.exports = mongoose.model("Cart", cartSchema);