const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  voterId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  hasVoted: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
