const express = require("express");
const wasteModel = require("../models/waste");
const userModel = require("../models/user"); // Import User model
const zod = require("zod");
const { authMiddleware } = require("../middlewares/userAuth");

const wasteRouter = express.Router();

// PUT request to input waste data
wasteRouter.post("/input", authMiddleware, async (req, res) => {
  try {
    // Extracting necessary data from request body
    const { volume, type, date } = req.body;
    const userId = req.userId;

    // Creating a new waste document
    const newWaste = await wasteModel.create({
      user: userId,
      volume: volume,
      type: type,
      date: date,
    });

    // Find the user document based on userId
    const user = await userModel.User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ error: `User not found ${userId}` });
    }

    // Add the new waste document to the user's waste array
    user.waste.push(newWaste._id); // Assuming newWaste is the created waste document

    // Save the user document to persist the changes
    await user.save();

    if (type == "ewaste") {
      user.eWaste += volume;
    } else if (type == "drywaste") {
      user.dryWaste += volume;
    } else {
      user.wetWaste += volume;
    }

    await user.save();

    // Sending response with the created waste document
    res.status(200).json(newWaste);
  } catch (error) {
    // Handling errors
    console.error("Error creating waste:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

wasteRouter.get("/lastMonth", authMiddleware, async (req, res) => {
  const userId = req.userId; // Assuming this is the user's ID

  const currentDate = new Date();
  const lastMonthDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    currentDate.getDate()
  );

  userModel.User.findOne({ _id: userId })
    .populate({
      path: "waste",
      match: { date: { $gte: lastMonthDate } },
    })
    .exec()
    .then((user) => {
      if (!user) {
        console.log("User not found");
        return;
      }
      //   console.log("User's waste collected in the last month:", user.waste);
      res.json(user.waste);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});

module.exports = wasteRouter;
