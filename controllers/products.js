const Products = require("../model/Products");

const getAllProducts = async (req, res) => {
  const products = await Products.find({});
  res.status(200).json({ msg: products });
};
const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "bad request" });
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

// Update Product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "Bad request" });
  }
  const product = await Products.findById(id);
  if (!product) {
    return res.status(404).json({ msg: "Product not found" });
  }
  const updatedProduct = await Products.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ msg: updatedProduct });
};

// delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "Bad request" });
  }
  try {
    const deletedProduct = await Products.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ msg: "Product not Found" });
    }
    res.status(200).json({ msg: "Deleted Product Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
