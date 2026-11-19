const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");

// Helper: calculate nights between two dates
const calcNights = (checkIn, checkOut) => {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((new Date(checkOut) - new Date(checkIn)) / msPerDay);
};

// POST /listings/:id/bookings  — create a booking
module.exports.createBooking = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  // Block owner from booking their own listing
  if (listing.owner.equals(req.user._id)) {
    req.flash("error", "You cannot book your own listing!");
    return res.redirect(`/listings/${listing._id}`);
  }

  const { checkIn, checkOut, guests } = req.body.booking;
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Date sanity checks
  if (checkInDate < today) {
    req.flash("error", "Check-in date cannot be in the past.");
    return res.redirect(`/listings/${listing._id}`);
  }
  if (checkOutDate <= checkInDate) {
    req.flash("error", "Check-out must be after check-in.");
    return res.redirect(`/listings/${listing._id}`);
  }

  // Overlap check: find any active booking that overlaps with requested dates
  const overlap = await Booking.findOne({
    listing: listing._id,
    status: { $in: ["pending", "confirmed"] },
    checkIn: { $lt: checkOutDate },
    checkOut: { $gt: checkInDate },
  });

  if (overlap) {
    req.flash(
      "error",
      "These dates are already booked. Please choose different dates."
    );
    return res.redirect(`/listings/${listing._id}`);
  }

  const nights = calcNights(checkInDate, checkOutDate);
  const totalPrice = nights * listing.price;

  const newBooking = new Booking({
    listing: listing._id,
    user: req.user._id,
    checkIn: checkInDate,
    checkOut: checkOutDate,
    guests: Number(guests),
    totalPrice,
  });

  await newBooking.save();
  req.flash("success", "Booking confirmed! Check your trips for details.");
  res.redirect("/bookings/my-trips");
};

// GET /bookings/my-trips  — all bookings made by current user
module.exports.myTrips = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("listing")
    .sort({ checkIn: 1 });
  res.render("bookings/my-trips.ejs", { bookings });
};

// DELETE /bookings/:bookingId  — cancel a booking (guest)
module.exports.cancelBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.bookingId);
  if (!booking) {
    req.flash("error", "Booking not found!");
    return res.redirect("/bookings/my-trips");
  }

  if (!booking.user.equals(req.user._id)) {
    req.flash("error", "You are not authorised to cancel this booking.");
    return res.redirect("/bookings/my-trips");
  }

  if (booking.status === "cancelled") {
    req.flash("error", "Booking is already cancelled.");
    return res.redirect("/bookings/my-trips");
  }

  booking.status = "cancelled";
  await booking.save();
  req.flash("success", "Booking cancelled.");
  res.redirect("/bookings/my-trips");
};

// GET /bookings/reservations  — all bookings on listings owned by current user
module.exports.reservations = async (req, res) => {
  // Find all listings owned by current user
  const myListings = await Listing.find({ owner: req.user._id }).select("_id");
  const listingIds = myListings.map((l) => l._id);

  const bookings = await Booking.find({ listing: { $in: listingIds } })
    .populate("listing")
    .populate("user")
    .sort({ checkIn: 1 });

  res.render("bookings/reservations.ejs", { bookings });
};

// PATCH /bookings/:bookingId/status  — confirm or reject (host only)
module.exports.updateStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.bookingId).populate(
    "listing"
  );
  if (!booking) {
    req.flash("error", "Booking not found!");
    return res.redirect("/bookings/reservations");
  }

  if (!booking.listing.owner.equals(req.user._id)) {
    req.flash("error", "You are not authorised to manage this booking.");
    return res.redirect("/bookings/reservations");
  }

  const { status } = req.body;
  if (!["confirmed", "cancelled"].includes(status)) {
    throw new ExpressError(400, "Invalid status value.");
  }

  booking.status = status;
  await booking.save();
  req.flash(
    "success",
    `Booking ${status === "confirmed" ? "confirmed" : "rejected"} successfully.`
  );
  res.redirect("/bookings/reservations");
};
