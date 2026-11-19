const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controllers/booking.js");

// Guest: view my trips
router.get("/my-trips", isLoggedIn, wrapAsync(bookingController.myTrips));

// Host: view reservations on own listings
router.get(
  "/reservations",
  isLoggedIn,
  wrapAsync(bookingController.reservations)
);

// Host: confirm or reject a booking
router.patch(
  "/:bookingId/status",
  isLoggedIn,
  wrapAsync(bookingController.updateStatus)
);

// Guest: cancel a booking
router.delete(
  "/:bookingId",
  isLoggedIn,
  wrapAsync(bookingController.cancelBooking)
);

module.exports = router;
