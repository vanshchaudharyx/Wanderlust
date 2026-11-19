const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");

module.exports.renderDashboard = async (req, res) => {
  const hostId = req.user._id;

  // 1. Find all listings owned by current user
  const listings = await Listing.find({ owner: hostId });
  const listingIds = listings.map((l) => l._id);
  const totalListings = listings.length;

  // 2. Fetch all bookings for these listings, populating listing and user
  const rawBookings = await Booking.find({ listing: { $in: listingIds } })
    .populate("listing")
    .populate("user")
    .sort({ checkIn: 1 });

  // 3. Skip bookings whose listing or user no longer exists
  const bookings = rawBookings.filter((b) => b.listing != null && b.user != null);

  const totalBookings = bookings.length;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let earnedAmount = 0;
  let expectedAmount = 0;
  const upcomingGuests = [];
  const pendingRequests = [];

  for (let b of bookings) {
    const checkIn = new Date(b.checkIn);
    const checkOut = new Date(b.checkOut);

    if (b.status === "confirmed") {
      // Earned: checkOut in the past (before today)
      if (checkOut < today) {
        earnedAmount += b.totalPrice;
      } else {
        // Expected: checkOut today or later
        expectedAmount += b.totalPrice;
      }

      // Upcoming guests: checkIn today or later
      if (checkIn >= today) {
        upcomingGuests.push(b);
      }
    } else if (b.status === "pending") {
      pendingRequests.push(b);
    }
  }

  res.render("host/dashboard.ejs", {
    totalListings,
    earnedAmount,
    expectedAmount,
    totalBookings,
    upcomingGuests,
    pendingRequests,
  });
};
