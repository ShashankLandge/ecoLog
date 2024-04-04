const express = require("express");
const { Requirement } = require("../models/requirement");
const { User } = require("../models/user");
const { authMiddleware } = require("../middlewares/userAuth");
const requirementRouter = express.Router();

requirementRouter.post("/input", async (req, res) => {
  try {
    const newReq = await Requirement.create({
      volume: req.body.volume,
      type: req.body.type,
    });
    res.json({
      msg: "Requirement added",
    });
  } catch (err) {
    console.error("Error creating requirement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requirementRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const requirements = await Requirement.find({
    type: {
      $regex: filter,
    },
  });

  res.json({
    requirements: requirements.map((requirement) => ({
      type: requirement.type,
      volume: requirement.volume,
      _id: requirement._id,
    })),
  });
});

requirementRouter.put("/sell", authMiddleware, async (req, res) => {
  const reqId = req.body.reqId;
  const userId = req.userId;

  try {
    // Find the requirement based on reqId
    const requirement = await Requirement.findOne({ _id: reqId });

    // Find the user based on userId
    const user = await User.findById(userId);

    // Check if requirement or user not found
    if (!requirement || !user) {
      return res
        .status(404)
        .json({ error: `User or Requirement not found ${reqId}${userId}` });
    }

    let message = "Not enough waste!";

    // Check if the user has exactly enough waste to fulfill the requirement
    if (requirement.type === "ewaste" && user.eWaste >= requirement.volume) {
      user.earnings += requirement.volume;
      user.recycled += requirement.volume;
      user.eWaste -= requirement.volume;
      requirement.volume = 0; // Set requirement volume to 0
      message = "Waste sold";
      user.earnings += 10;
    } else if (
      requirement.type === "drywaste" &&
      user.dryWaste >= requirement.volume
    ) {
      user.earnings += requirement.volume;
      user.recycled += requirement.volume;
      user.dryWaste -= requirement.volume;
      requirement.volume = 0; // Set requirement volume to 0
      message = "Waste sold";
      user.earnings += 10;
    } else if (
      requirement.type === "wetwaste" &&
      user.wetWaste >= requirement.volume
    ) {
      user.earnings += requirement.volume;
      user.recycled += requirement.volume;
      user.wetWaste -= requirement.volume; // Subtract requirement volume from user's waste
      requirement.volume = 0; // Set requirement volume to 0
      message = "Waste sold";
    }

    // Check if the user has some waste but not enough to fulfill the entire requirement
    else if (
      requirement.type == "ewaste" &&
      user.eWaste < requirement.volume &&
      user.eWaste > 0
    ) {
      user.earnings += user.eWaste;
      user.recycled += user.eWaste;
      requirement.volume -= user.eWaste;
      user.eWaste = 0;
      message = "Partial waste sold";
      user.earnings += 10;
    } else if (
      requirement.type === "drywaste" &&
      user.dryWaste < requirement.volume &&
      user.dryWaste > 0
    ) {
      user.earnings += user.dryWaste;
      user.recycled += user.dryWaste;
      requirement.volume -= user.dryWaste;
      user.dryWaste = 0;
      message = "Partial waste sold";
    } else if (
      requirement.type === "wetwaste" &&
      user.wetWaste < requirement.volume &&
      user.wetWaste > 0
    ) {
      user.earnings += user.wetWaste;
      user.recycled += user.wetWaste;
      requirement.volume -= user.wetWaste;
      user.wetWaste = 0;
      message = "Partial waste sold";
    }

    // Save the updated user document
    await user.save();

    // Check if requirement volume is zero or less, then delete
    // Check if requirement volume is zero or less, then delete
    if (requirement.volume <= 0) {
      await Requirement.deleteOne({ _id: requirement._id });
    } else {
      // Save the updated requirement document
      await requirement.save();
    }

    // Send the response
    return res.json({ msg: message });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = requirementRouter;
