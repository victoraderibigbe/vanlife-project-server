const express = require("express");
const router = express.Router();
const {
  getVans,
  getVan,
  getHostVans,
  getHostVan,
} = require("../controllers/van.controller");

router.get("/api/vans", getVans);
router.get("/api/vans/:id", getVan);
router.get("/api/host/vans", getHostVans);
router.get("/api/host/vans/:id", getHostVan);

module.exports = router;
