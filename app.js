const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Goa",
//     country: "India",
//   });
//   await sampleListing.save();
//   console.log("Sample was saved");
//   res.send("Successful testing");
// });

app.get("/", (req, res) => {
  res.send("Hi! I m root");
});
// Index Route ==>
// GET /listings --> all listings
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    // console.log(allListings[0].location);
    res.render("listings/index.ejs", { allListings });
  }),
);

// This new route created above the show route because node will consider new as id.
//Create: New and create Route-->
// GET /listing/new --> FORM--> Submit--> POST-->/listing
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route-->
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  }),
);

//Create route
app.post(
  "/listings",
  wrapAsync(async (req, res, next) => {
    // let { title, description, price, image, location, country } = req.body;
    // let listing = req.body.listing; //Alternate and show way instead of above line.
    if (!req.body.listing) {
      throw new ExpressError(400, "Send valid data for listing");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    // console.log(listing);
    res.redirect("listings");
  }),
);
// Update Route: Edit and Update route
// Get-->/listings/:id/edit --->render edit form-->submit --->PUT-->/listings/:id

// Edit route-->
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }),
);

// Update route
app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }); //{...req.body.listing }--> We will convert these parameters into individual values.
    res.redirect(`/listings/${id}`); //Redirect to show route
  }),
);
//Delete route-->
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    res.redirect("/listings");
  }),
);

app.all("/{*splat}", (req, res, next) => {
  next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  // res.send("Something went wrong");
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(8080, () => {
  console.log("Server is listening on 8080");
});
