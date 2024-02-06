const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database not connected", err);
  });

let userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
