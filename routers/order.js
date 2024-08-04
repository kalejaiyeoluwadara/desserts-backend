const express = require("express");
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
  getAllOrders,
} = require("../controllers/Order");
const router = express.Router();
router.route("/").get(getAllOrders).post(createOrder);
router.get("/:id", getSingleOrder);
router.route("/:orderId").patch(updateOrder).delete(deleteOrder);

module.exports = router;
