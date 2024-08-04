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
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user._id,
        email: user.email,
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
module.exports = { register, login };
