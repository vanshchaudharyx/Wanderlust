if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// require("dotenv").config();
// console.log(process.env.SECRET);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const connectMongo = require("connect-mongo");
const MongoStore = connectMongo.default || connectMongo;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Trust proxy for production environments (Render, Heroku, etc.)
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingRouter = require("./routes/booking.js");
const listingBookingRouter = require("./routes/listingBooking.js");
const hostRouter = require("./routes/host.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const db_Url = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  // await mongoose.connect(MONGO_URL);
  await mongoose.connect(db_Url);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
  mongoUrl: db_Url,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Error in mongo session store", err);
});
// Session options.
const sessionOption = {
  store, //Now our session info store in our atlas database.
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  //Cookie expiration->
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //This means after 1 week because Date.now return time in ms.
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
// app.get("/", (req, res) => {
//   res.send("Hi! I m root");
// });



app.use(session(sessionOption));
app.use(flash());
// In a session we dont need to login again and again for different requests thats why we use passport after session middleware.

// A middleware that initializes passport.
app.use(passport.initialize());
app.use(passport.session()); //A web application needs the ability to identify users as the browsfrom page to page.
// This series of requests and responses,each associated with the same user,is known as a person.
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser()); //To store the user related info in session that means serialize.
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  res.locals.searchQuery = req.query.q || "";
  // console.log(res.locals.success);
  next();
});

// Demo User
// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "delta-student",
//   });
//   // To store this user.
//   const registeredUser = await User.register(fakeUser, "helloworld"); //helloworld is the password.
//   // This register method automatically checks our username us unique or not.
//   res.send(registeredUser);
// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/listings/:id/bookings", listingBookingRouter);
app.use("/bookings", bookingRouter);
app.use("/host", hostRouter);
app.use("/", userRouter);

// Root route -> redirect to /listings
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// Privacy & Terms Pages
app.get("/privacy", (req, res) => {
  res.render("pages/privacy.ejs");
});

app.get("/terms", (req, res) => {
  res.render("pages/terms.ejs");
});
// How we can convert schema validation in the form of middlewares.

// We can alse pass this validateListing middleware with routes.
// Like app.post(
// "/listings",c

app.all("/{*splat}", (req, res, next) => {
  next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  console.error("SERVER ERROR:", err);
  res.status(statusCode).render("error.ejs", { message });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
