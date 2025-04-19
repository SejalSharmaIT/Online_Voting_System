const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Login route
router.post("/login", async (req, res) => {
  const { voterId, name, email, mobileNumber } = req.body;
  
  if (!voterId || !name || !email || !mobileNumber) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let user = await User.findOne({ voterId });
  if (!user) {
    user = new User({ voterId, name, email, mobileNumber, hasVoted: false });
    await user.save();
  }

  res.json({ success: true, user });
});

module.exports = router;
