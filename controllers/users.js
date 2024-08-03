const getAllUsers = async (req, res) => {
  res.status(200).json({ msg: "all Users" });
};
const getSingleUser = async (req, res) => {
  res.status(200).json({ msg: "single User" });
};

module.exports = {
  getAllUsers,
  getSingleUser,
};
