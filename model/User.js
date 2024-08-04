const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Provide user full name"],
  },
  email: {
    type: String,
    required: [true, "Provide user email"],
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: [true, "Provide user password"],
  },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserSchema.methods.matchPassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
