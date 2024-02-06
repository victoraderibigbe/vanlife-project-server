const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const vanRouter = require("./routes/van.routes");
const userRouter = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", vanRouter, userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
