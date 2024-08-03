const register = async (req, res) => {
  res.status(200).json({ msg: "Register user" });
};
const login = async (req, res) => {
  res.status(200).json({ msg: "User login" });
};
module.exports = { register, login };
