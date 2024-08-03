const mongoose = require("mongoose");
const Products = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Provide product name"],
    unique: [true, "Product name already exists"],
  },
  price: {
    type: number,
    require: [true, "Provide product price"],
  },
  image: {
    type: String,
    require: [true, "Provide product image"],
  },
  category: {
    type: String,
    require: [true, "Provide product category"],
  },
});
module.exports = Products;
