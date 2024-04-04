const express = require("express");
const wasteRouter = require("./routers/wasteRouter.js");
const userRouter = require("./routers/userRouter.js");
const requirementRouter = require("./routers/requirementRouter.js");
const binRouter = require("./routers/binRouter.js");
const { connectToDb } = require("./db.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/waste", wasteRouter);
app.use("/user", userRouter);
app.use("/requirement", requirementRouter);
app.use("/bin", binRouter);

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
