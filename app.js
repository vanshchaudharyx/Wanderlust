const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

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
app.get("/listings", async (req, res) => {
  let allListings = await Listing.find({});
  // console.log(allListings[0].location);
  res.render("listings/index.ejs", { allListings });
});

app.listen(8080, () => {
  console.log("Server is listening on 8080");
});
