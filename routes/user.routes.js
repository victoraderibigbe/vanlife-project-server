const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/user.controller");

router.post("/user/register", register);
router.post("/user/login", login);

module.exports = router;
