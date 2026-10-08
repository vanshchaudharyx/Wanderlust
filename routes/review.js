const express = require("express");
// const router = express.Router();
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

// Reviews Route
// POST Route-->
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created");

    //   console.log("New Review Saved");
    //   res.send("New Review Saved");
    res.redirect(`/listings/${listing._id}`);
  }),
);
//Delete Review route-->
router.delete(
  "/:reviewID",
  wrapAsync(async (req, res) => {
    let { id, reviewID } = req.params;
    // Mongo pull operator--> The $pull opeprator removes from an existing array all instances of a value or values that matches a specified condition.
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewID } });
    await Review.findByIdAndDelete(reviewID);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
  }),
);

module.exports = router;
