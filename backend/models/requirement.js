const mongoose = require("mongoose");

const requirementSchema = mongoose.Schema({
  volume: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Requirement = mongoose.model("requirement", requirementSchema);

module.exports = {
  Requirement,
};
