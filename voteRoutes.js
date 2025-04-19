const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Vote = require("../models/Vote");

// Route to cast a vote
router.post("/cast", async (req, res) => {
  const { voterId, candidate } = req.body;

  if (!voterId || !candidate) {
    return res.status(400).json({ success: false, error: "Voter ID and candidate are required" });
  }

  try {
    const user = await User.findOne({ voterId });

    if (!user) {
      return res.status(404).json({ success: false, error: "Voter not registered" });
    }

    if (user.hasVoted) {
      return res.status(400).json({ success: false, error: "You have already voted" });
    }

    // Save the vote
    await Vote.create({ voterId, candidate });

    // Mark the user as voted
    user.hasVoted = true;
    await user.save();

    return res.status(200).json({ success: true, message: "Vote casted successfully" });
  } catch (error) {
    console.error("Error in vote casting:", error);
    return res.status(500).json({ success: false, error: "Server error while casting vote" });
  }
});

module.exports = router;












/*const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Vote = require("../models/Vote");

router.post("/cast", async (req, res) => {
  const { voterId, candidate } = req.body;
  const user = await User.findOne({ voterId });

  if (!user || user.hasVoted) return res.status(400).json({ error: "Already voted or not registered" });

  await Vote.create({ candidate });
  user.hasVoted = true;
  await user.save();

  res.json({ success: true, message: "Vote casted" });
});

module.exports = router;*/
