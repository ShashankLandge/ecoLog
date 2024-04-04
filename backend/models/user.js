const mongoose = require("mongoose");

// Create a Schema for Users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  waste: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Waste",
    },
  ],
  eWaste: {
    type: Number,
    default: 0,
  },
  dryWaste: {
    type: Number,
    default: 0,
  },
  wetWaste: {
    type: Number,
    default: 0,
  },
  earnings: {
    type: Number,
    default: 0,
  },
  recycled: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
