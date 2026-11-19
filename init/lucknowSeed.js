const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// 10 realistic Lucknow listings across notable localities
const lucknowListings = [
  {
    title: "Heritage Awadhi Haveli in Hazratganj",
    description:
      "Experience timeless royal hospitality in the cultural heart of Lucknow. Located walking distance from Hazratganj promenade, royal bakeries, and chikan handicraft bazaars. Features high ceilings and vintage courtyards.",
    price: 3499,
    location: "Hazratganj, Lucknow",
    country: "India",
    category: "Iconic Cities",
    maxGuests: 4,
    image: {
      filename: "lucknow_hazratganj",
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.9462, 26.8524], // [lng, lat]
    },
  },
  {
    title: "Modern Riverside Villa near Gomti Riverfront",
    description:
      "Spacious modern retreat overlooking Gomti Riverfront Park. Perfect for family getaways with private balconies, contemporary interiors, high-speed Wi-Fi, and tranquil riverfront walking tracks.",
    price: 4999,
    location: "Gomti Nagar, Lucknow",
    country: "India",
    category: "Trending",
    maxGuests: 6,
    image: {
      filename: "lucknow_gomtinagar",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.9992, 26.8536],
    },
  },
  {
    title: "Old Lucknow Royal Suite near Bara Imambara",
    description:
      "Stay minutes away from the legendary Bhool Bhulaiya, Rumi Darwaza, and Tunday Kababi. Immersed in old-world Nawabi charm with handcrafted jharokhas, traditional floor seating, and authentic local cuisine.",
    price: 2799,
    location: "Near Bara Imambara, Old Lucknow",
    country: "India",
    category: "Castles",
    maxGuests: 3,
    image: {
      filename: "lucknow_imambara",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.9126, 26.8689],
    },
  },
  {
    title: "Mango Orchard Farmhouse in Malihabad",
    description:
      "Surround yourself with the world-famous Dasheri mango groves of Malihabad. Relax with rustic open-air charpais, farm-to-table organic meals, bonfire evenings, and birdwatching away from the bustle.",
    price: 3899,
    location: "Malihabad, Lucknow",
    country: "India",
    category: "Farms",
    maxGuests: 8,
    image: {
      filename: "lucknow_malihabad",
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.7167, 26.9214],
    },
  },
  {
    title: "Chic Cozy Studio in Aliganj",
    description:
      "Peaceful residential studio in central Aliganj near Kapoorthala market. Features a dedicated work desk, modern kitchen, smart TV, and easy metro connectivity across the city.",
    price: 1899,
    location: "Aliganj, Lucknow",
    country: "India",
    category: "Rooms",
    maxGuests: 2,
    image: {
      filename: "lucknow_aliganj",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.9381, 26.8837],
    },
  },
  {
    title: "Traveler Transit Hub near Charbagh Station",
    description:
      "Super-accessible, safe, and impeccably clean stay just minutes from Lucknow Charbagh Railway & Metro Station. Ideal for backpackers, business travelers, and weekend trippers.",
    price: 1499,
    location: "Charbagh, Lucknow",
    country: "India",
    category: "Rooms",
    maxGuests: 2,
    image: {
      filename: "lucknow_charbagh",
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.9231, 26.8315],
    },
  },
  {
    title: "Serene Garden Bungalow in Indira Nagar",
    description:
      "Green, sunlit ground-floor bungalow surrounded by potted plants and private lawn. Located in quiet Indira Nagar, offering calm evenings, family hospitality, and authentic home-cooked breakfast.",
    price: 3199,
    location: "Indira Nagar, Lucknow",
    country: "India",
    category: "Iconic Cities",
    maxGuests: 5,
    image: {
      filename: "lucknow_indiranagar",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.9856, 26.8778],
    },
  },
  {
    title: "Lakeside Glamping Pods near Chinhat",
    description:
      "Unique glamping tents by the water reservoir on the outskirts of Chinhat. Enjoy stargazing, barbecues by the fire pit, acoustic music, and peaceful outdoor serenity right near Faizabad Road.",
    price: 2499,
    location: "Chinhat, Lucknow",
    country: "India",
    category: "Camping",
    maxGuests: 3,
    image: {
      filename: "lucknow_chinhat",
      url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [81.0423, 26.8876],
    },
  },
  {
    title: "Luxury Pool Penthouse in Vibhuti Khand",
    description:
      "Exclusive rooftop penthouse with infinity splash pool and panoramic skyline view of Lucknow's IT and financial district. State-of-the-art entertainment lounge and designer bar setup.",
    price: 6499,
    location: "Vibhuti Khand, Gomti Nagar, Lucknow",
    country: "India",
    category: "Amazing Pools",
    maxGuests: 4,
    image: {
      filename: "lucknow_vibhuti_pool",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [81.0068, 26.8629],
    },
  },
  {
    title: "Kaiserbagh Historic Colonial Mansion",
    description:
      "Stay in an authentic pre-independence era architectural gem restored with modern amenities. High arches, sepia photographs, antique mahogany furniture, and peaceful inner courtyards.",
    price: 4199,
    location: "Kaiserbagh, Lucknow",
    country: "India",
    category: "Castles",
    maxGuests: 5,
    image: {
      filename: "lucknow_kaiserbagh",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    },
    geometry: {
      type: "Point",
      coordinates: [80.9329, 26.8572],
    },
  },
];

async function seedLucknow() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB successfully.");

    // Username can be passed as a CLI argument: node init/lucknowSeed.js <username>
    // e.g. node init/lucknowSeed.js delta-student
    const targetUsername = process.argv[2] ? process.argv[2].toLowerCase() : null;

    let ownerUser = null;
    if (targetUsername) {
      ownerUser = await User.findOne({ username: targetUsername });
      if (!ownerUser) {
        console.error(`User with username "${targetUsername}" not found in database.`);
        console.log("Available users in database:");
        const users = await User.find({}, "username");
        console.log(users.map((u) => u.username));
        process.exit(1);
      }
    } else {
      // Fallback to the first existing user in DB if no username was passed
      ownerUser = await User.findOne();
      if (!ownerUser) {
        console.error("No users found in database. Please create or register a user first!");
        process.exit(1);
      }
      console.log(`No username argument passed. Defaulting to first found user: "${ownerUser.username}"`);
    }

    console.log(`Using owner: ${ownerUser.username} (${ownerUser._id})`);

    let insertedCount = 0;
    let skippedCount = 0;

    for (let data of lucknowListings) {
      // Check if listing with the same title already exists (preserves existing data, no duplicates)
      const existing = await Listing.findOne({ title: data.title });
      if (existing) {
        console.log(`[SKIP] Already exists: "${data.title}"`);
        skippedCount++;
      } else {
        const newListing = new Listing({
          ...data,
          owner: ownerUser._id,
        });
        await newListing.save();
        console.log(`[INSERTED] "${data.title}" in ${data.location}`);
        insertedCount++;
      }
    }

    console.log("\n=================================");
    console.log(`Seeding complete!`);
    console.log(`Inserted: ${insertedCount} listings`);
    console.log(`Skipped:  ${skippedCount} duplicates`);
    console.log("Existing listings were left completely untouched.");
    console.log("=================================");
  } catch (err) {
    console.error("Error during seeding:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

seedLucknow();
