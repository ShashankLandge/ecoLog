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

    // Sending response with the created waste document
    res.status(200).json(newWaste);
  } catch (error) {
    // Handling errors
    console.error("Error creating waste:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = wasteRouter;
