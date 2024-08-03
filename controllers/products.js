const Products = require("../model/Products");

const getAllProducts = async (req, res) => {
  const products = await Products.find({});
  res.status(200).json({ msg: products });
};
const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ msg: "bad request" });
  }
  const product = await Products.findById(id);
  res.status(200).json({ msg: product });
};
const createProduct = async (req, res) => {
  const { name, price, category, image } = req.body;

  try {
    const newProduct = await Products.create({ name, price, category, image });
    res.status(201).json({ newProduct });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
const updateProduct = async (req, res) => {
  res.status(200).json({ msg: "updated product" });
};
const deleteProduct = async (req, res) => {
  res.status(200).json({ msg: "deleted products" });
};
module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
