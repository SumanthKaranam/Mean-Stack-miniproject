const mongoose = require("mongoose");

const productListSchema = mongoose.Schema({
id: {
    type: String,
    required: [true, "id:"],
  },
  brand:{
    type: String,
    required: [true, "Please enter product name:"],
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
    maxLength: [8, "Prcie cannot exceed 8 characters"],
  },
  image: {
    type:String,
    required:[true]
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
module.exports = mongoose.model("ProductList", productListSchema);