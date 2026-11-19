const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const hostController = require("../controllers/host.js");

// GET /host/dashboard
router.get("/dashboard", isLoggedIn, wrapAsync(hostController.renderDashboard));

module.exports = router;
