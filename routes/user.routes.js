const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getProfile,
} = require("../controllers/user.controller");

router.post("/user/register", register);
router.post("/user/login", login);
router.get("/user/profile", getProfile);

module.exports = router;
