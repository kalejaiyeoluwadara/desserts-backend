const express = require("express");
const {
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/Order");
const router = express.Router();
router.post("/", createOrder);
router.route("/:orderId").put(updateOrder).delete(deleteOrder);

module.exports = router;
