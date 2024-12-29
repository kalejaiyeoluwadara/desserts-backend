const DemoUser = require("../model/DemoUser");

// Add a demo user with position
const addDemoUser = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }
  try {
    // Add the new user
    const user = await DemoUser.create({ email });

    // Get the count of users to determine the position
    const totalUsers = await DemoUser.countDocuments();

    res.status(201).json({
      message: "User added successfully.",
      user: { ...user._doc, position: totalUsers }, // Include position
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding user.", error });
  }
};

// Delete a demo user
const deleteDemoUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await DemoUser.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ message: "User deleted successfully.", user });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user.", error });
  }
};

// View all demo users
// View all demo users with position
const getAllDemoUsers = async (req, res) => {
  try {
    // Fetch all users, sorted by creation time (ascending)
    const users = await DemoUser.find().sort({ createdAt: 1 });

    // Add position to each user
    const usersWithPosition = users.map((user, index) => ({
      ...user._doc, // Spread the existing user document
      position: index + 1, // Calculate position (1-based index)
    }));

    res.status(200).json(usersWithPosition);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users.", error });
  }
};

module.exports = { addDemoUser, deleteDemoUser, getAllDemoUsers };
