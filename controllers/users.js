const User = require("../model/User");
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ msg: users });
};
const getSingleUser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ msg: "bad request" });
  }
  const user = await User.findById(id);
  res.status(200).json({ msg: user });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "Bad request" });
  }
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ msg: updatedUser });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "Bad request" });
  }
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).json({ msg: "User not Found" });
    }
    res.status(200).json({ msg: "Deleted User Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
