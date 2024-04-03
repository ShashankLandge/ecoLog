const mongoose = require("mongoose");
const { URL } = require("./config.js");

function connectToDb() {
  return mongoose.connect(URL);
}

module.exports = {
  connectToDb,
};
