const userModel = require("../models/user.model");

const register = (req, res) => {
  console.log(req.body);
  const newUser = new userModel(req.body);
  newUser
    .save()
    .then((user) => {
      console.log("User saved", user);
      res.send({ status: true, message: "Registration successfull!" });
    })
    .catch((err) => {
      console.log("Registration failed", err);
      res.send({ status: false, message: "Registration failed!" });
    });
};

const updatePassword = (req, res) => {
  console.log(req.body);
  const filter = { _id: req.body.userId };
  const update = { password: req.body.newPassword };

  userModel
    .findOneAndUpdate(filter, update, { new: true })
    .then((user) => {
      if (!user) {
        console.log("User not found");
        return res.status(404).send({ message: "User not found" });
      }
      console.log("Password updated", user);
      res.status(200).send({ message: "Password updated successfully", user });
    })
    .catch((err) => {
      console.log("Update failed", err);
      res.status(500).send({ message: "Password update failed" });
    });
};

const login = (req, res) => {
  console.log(req.body);
  userModel
    .findOne({ email: req.body.email, password: req.body.password })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Incorrect email or password" });
      }
      res.status(200).json({ user, message: "Login Successful" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    });
};

module.exports = { register, login, updatePassword };
