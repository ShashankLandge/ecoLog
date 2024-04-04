const mongoose = require("mongoose");

const organisationSchema = mongoose.Schema({
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
  requirements: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "requirement",
  },
});
