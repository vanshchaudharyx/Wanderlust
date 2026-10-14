const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// Controller-->
const userController = require("../controllers/user.js");

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login", //if this middleware successfully works then we enter in the callback if not then redirect to login.
      failureFlash: true,
    }), // passport.authenticate() is the middleware that use in post route before authentication.
    userController.login,
  );
// Logout Route
router.get("/logout", userController.logout);

module.exports = router;
