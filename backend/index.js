const express = require("express");
const wasteRouter = require("./routers/wasteRouter.js");
const userRouter = require("./routers/userRouter.js");
const { connectToDb } = require("./db.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/waste", wasteRouter);
app.use("/user", userRouter);

// Connect to MongoDB and start the server
connectToDb()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
