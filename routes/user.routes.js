const express = require("express");
const router = express.Router();
const { register, login, updatePassword } = require("../controllers/user.controller");

router.post("/user/register", register);
router.post("/user/login", login);
router.post("/user/update", updatePassword);

module.exports = router;
