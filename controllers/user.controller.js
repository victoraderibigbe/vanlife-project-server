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

const login = (req, res) => {
  console.log(req.body);
  userModel
    .findOne({ email: req.body.email, password: req.body.password })
    .then((user) => {
      console.log(user);
      if (user) {
        res.send({
          status: true,
          message: "Login successful!",
          user_id: user._id,
        });
      } else {
        res.send({ status: false, message: "Incorrect email or password!" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProfile = (req, res) => {
  userModel
    .findOne({ user_id: req.body.user_id })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    });
};

module.exports = { register, login, getProfile };
