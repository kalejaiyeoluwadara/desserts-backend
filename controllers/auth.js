const User = require("../model/User");
const register = async (req, res) => {
  const { fullname, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const newUser = await User.create(req.body);
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      email: newUser.email,
    });
  } else {
    res.status(400).json({ msg: "Invalid user data" });
  }

  res.status(200).json({ msg: "Register user" });
};
const login = async (req, res) => {
  res.status(200).json({ msg: "User login" });
};
module.exports = { register, login };
