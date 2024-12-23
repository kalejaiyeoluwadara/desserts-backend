const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByUsername,
} = require("../controllers/users");

const router = express.Router();

// Routes
router.post("/", createUser); // Create user
router.get("/", getUsers); // Get user(s)
router.get("/:username", getUserByUsername);
router.patch("/", updateUser); // Update user
router.delete("/", deleteUser); // Delete user

module.exports = router;
