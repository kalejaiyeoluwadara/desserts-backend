const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true, // Ensures no duplicates
      trim: true,
    },
    bankName: {
      type: String,
      required: [true, "Bank name is required"],
      trim: true,
    },
    dp: {
      type: Number,
      default: 0,
    },
    accountNumber: {
      type: String,
      required: [true, "Account number is required"],
      trim: true,
      match: [/^\d+$/, "Account number must be numeric"], // Ensures only digits
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("User", UserSchema);
