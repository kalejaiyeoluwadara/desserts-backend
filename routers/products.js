const express = require("express");
const {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/products");
const router = express.Router();

router.route("/products").get(getAllProducts).post(createProduct);
router
  .route("/products/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
