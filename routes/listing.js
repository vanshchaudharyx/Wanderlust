const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// Controllers-->
const listingController = require("../controllers/listing.js");
// Index Route ==>
// GET /listings --> all listings
router.get("/", wrapAsync(listingController.index));

// This new route created above the show route because node will consider new as id.
//Create: New and create Route-->
// GET /listing/new --> FORM--> Submit--> POST-->/listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Route-->
router.get("/:id", wrapAsync(listingController.showListing));

//Create route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.createListing),
);
// Update Route: Edit and Update route
// Get-->/listings/:id/edit --->render edit form-->submit --->PUT-->/listings/:id

// Edit route-->
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

// Update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,

  wrapAsync(listingController.updateListing),
);
//Delete route-->
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing),
);
module.exports = router;
