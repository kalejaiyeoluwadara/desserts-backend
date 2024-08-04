const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderItemSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { _id: true }
);

const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Not paid", "Paid", "Shipped", "Delivered", "Cancelled"],
      default: "Not paid",
    },
    address: {
      type: String,
      required: true,
    },
    orderPrice: {
      type: Number,
      required: true,
    },
    orderItems: [orderItemSchema],
    deliveryMethod: {
      type: String,
      enum: ["Pickup delivery", "Home delivery"],
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Wallet", "Credit Card", "Bank Transfer"],
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
