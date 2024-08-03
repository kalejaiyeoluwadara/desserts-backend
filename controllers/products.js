const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "all products" });
};
const getSingleProduct = async (req, res) => {
  res.status(200).json({ msg: "single product" });
};
const createProduct = async (req, res) => {
  res.status(201).json({ msg: "created product successfully" });
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
