const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  // console.log(newReview)
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success", "New Review Created");

  //   console.log("New Review Saved");
  //   res.send("New Review Saved");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewID } = req.params;
  // Mongo pull operator--> The $pull opeprator removes from an existing array all instances of a value or values that matches a specified condition.
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewID } });
  await Review.findByIdAndDelete(reviewID);
  req.flash("success", "Review Deleted");
  res.redirect(`/listings/${id}`);
};
