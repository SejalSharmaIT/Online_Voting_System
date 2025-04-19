const express = require("express");
const router = express.Router();
const Vote = require("../models/Vote");

router.get("/", async (req, res) => {
  const votes = await Vote.aggregate([
    { $group: { _id: "$candidate", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
  res.json(votes);
});

module.exports = router;
