const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

// Function  Validate Listing
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

// Index Route ==>
// GET /listings --> all listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    // console.log(allListings[0].location);
    res.render("listings/index.ejs", { allListings });
  }),
);

// This new route created above the show route because node will consider new as id.
//Create: New and create Route-->
// GET /listing/new --> FORM--> Submit--> POST-->/listing
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route-->
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    // console.log(listing.reviews);
    if(!listing){
      req.flash("error","Listing you requested for does not exists!");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  }),
);

//Create route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    // let result = listingSchema.validate(req.body);

    // if (result.error) {
    //   throw new ExpressError(400, result.error.details[0].message);
    // }

    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing is created"); //This message is accessed by res.local variable

    res.redirect("/listings");
  }),
);
// Update Route: Edit and Update route
// Get-->/listings/:id/edit --->render edit form-->submit --->PUT-->/listings/:id

// Edit route-->
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
     if(!listing){
      req.flash("error","Listing you requested for does not exists!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  }),
);

// Update route
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }); //{...req.body.listing }--> We will convert these parameters into individual values.
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`); //Redirect to show route
  }),
);
//Delete route-->
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    // console.log(deletedListing);
    res.redirect("/listings");
  }),
);
module.exports = router;
