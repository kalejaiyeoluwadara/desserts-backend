const User = require("../model/User");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, bankName, accountNumber, dp } = req.body;

    // Validate input
    if (!username || !bankName || !accountNumber) {
      return res.status(400).json({
        error: "All fields (username, bankName, accountNumber) are required!",
      });
    }

    // Check for duplicate username
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists!" });
    }

    // Create new profile
    const newUser = new User({ username, bankName, accountNumber, dp });
    await newUser.save();

    res.status(201).json({
      message: "Profile created successfully!",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
};

// Get a single user by username
exports.getUserByUsername = async (req, res) => {
  try {
    const { username } = req.params; // Use params for a more RESTful URL

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "Profile not found!" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
};

// Update user profile
exports.updateUser = async (req, res) => {
  try {
    const { username, bankName, accountNumber } = req.body;

    if (!username) {
      return res
        .status(400)
        .json({ error: "Username is required for update!" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "Profile not found!" });
    }

    if (bankName) user.bankName = bankName;
    if (accountNumber) user.accountNumber = accountNumber;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully!",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
};

// Delete user profile
exports.deleteUser = async (req, res) => {
  try {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({
        error: "Username query parameter is required!",
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "Profile not found!" });
    }

    await user.deleteOne();

    res.status(200).json({
      message: "Profile deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
};
