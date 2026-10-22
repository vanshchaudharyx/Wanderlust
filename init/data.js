const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Lakeside Haveli in Udaipur",
    description:
      "Wake up to views of Lake Pichola from this restored royal haveli. Intricate jharokhas, a rooftop terrace, and boat rides right outside your door make this the City of Lakes at its most romantic.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/udaipur-haveli/800/600",
    },
    price: 6500,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Backwater Houseboat in Alleppey",
    description:
      "Drift through palm-fringed canals on a traditional Kerala houseboat, complete with a private chef serving fresh Alleppey fish curry. Falling asleep to gently lapping water is non-negotiable here.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/alleppey-houseboat/800/600",
    },
    price: 7000,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Heritage Homestay in Jaipur's Pink City",
    description:
      "Stay inside a 19th-century pink sandstone haveli minutes from Hawa Mahal and City Palace. Mornings start with masala chai on a jharokha overlooking the bustling bazaars below.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/jaipur-haveli/800/600",
    },
    price: 4200,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Riverside Cottage in Rishikesh",
    description:
      "A wooden cottage perched on the banks of the Ganges, footsteps from the suspension bridges and yoga ashrams. Fall asleep to the sound of the river and temple bells at dawn.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/rishikesh-ganges/800/600",
    },
    price: 2800,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Beach Villa in North Goa",
    description:
      "A whitewashed Portuguese-style villa steps from Ashwem Beach, with a private plunge pool and hammock-strung garden. Sunset beach shacks and flea markets are a short stroll away.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/goa-villa-north/800/600",
    },
    price: 8500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Tea Estate Bungalow in Munnar",
    description:
      "A colonial-era planter's bungalow surrounded by rolling emerald tea gardens in the Western Ghats. Misty mornings, log fires at night, and endless views of manicured hillsides.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/munnar-tea-estate/800/600",
    },
    price: 5200,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Houseboat Retreat in Srinagar",
    description:
      "A hand-carved cedar houseboat floating on Dal Lake, with shikara rides to the floating markets at sunrise. Snow-capped mountains frame every window of this Kashmiri classic.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/srinagar-dal-lake/800/600",
    },
    price: 6000,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Sleep under the stars in a luxury tent on the edge of the Thar Desert, with camel safaris to the Sam sand dunes and folk music around a bonfire under a sky full of stars.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/jaisalmer-desert-camp/800/600",
    },
    price: 4800,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Darjeeling",
    description:
      "A century-old bungalow with a view of Kanchenjunga from the veranda. Sip first-flush Darjeeling tea while the clouds roll through the surrounding pine forests.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/darjeeling-bungalow/800/600",
    },
    price: 4500,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "French Quarter Villa in Pondicherry",
    description:
      "A pastel-hued colonial villa in Pondicherry's French Quarter, with bougainvillea-draped courtyards and the promenade a two-minute walk away. Bicycles included for exploring the tree-lined streets.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/pondicherry-villa/800/600",
    },
    price: 5000,
    location: "Pondicherry",
    country: "India",
  },
  {
    title: "Mountain Cottage in Manali",
    description:
      "A pinewood cottage overlooking the Beas River with the snow-dusted peaks of the Pir Panjal range as a backdrop. Perfect base for treks to Solang Valley and Old Manali's cafes.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/manali-cottage/800/600",
    },
    price: 3800,
    location: "Manali",
    country: "India",
  },
  {
    title: "Beach Shack in Gokarna",
    description:
      "A laid-back bamboo beach hut on Om Beach, away from Goa's crowds. Trek the coastal cliff path between beaches by day, watch bioluminescent waves by night.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/gokarna-beach-shack/800/600",
    },
    price: 2200,
    location: "Gokarna",
    country: "India",
  },
  {
    title: "Palace Suite in Jodhpur's Blue City",
    description:
      "A suite inside a converted haveli overlooking the blue-washed rooftops of old Jodhpur, with Mehrangarh Fort towering above. Sunset views from the terrace are unmatched.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/jodhpur-blue-city/800/600",
    },
    price: 5500,
    location: "Jodhpur",
    country: "India",
  },
  {
    title: "Hilltop Villa in Coorg",
    description:
      "A glass-fronted villa nestled among coffee plantations in Kodagu, with mist rolling through the estate every morning. Waterfalls and spice gardens are a short drive away.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/coorg-villa/800/600",
    },
    price: 4700,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Beach Resort in Havelock Island",
    description:
      "A thatched-roof cottage steps from Radhanagar Beach's white sand and turquoise water. Snorkel over coral reefs by day, watch some of India's most spectacular sunsets by evening.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/havelock-andaman/800/600",
    },
    price: 9500,
    location: "Havelock Island",
    country: "India",
  },
  {
    title: "Riverside Camp in Rishikesh Valley",
    description:
      "A riverside camp on the banks of the Ganga surrounded by the Himalayan foothills, with white-water rafting starting right from the campsite and bonfire evenings under a clear sky.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/rishikesh-camp/800/600",
    },
    price: 3200,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Heritage Haveli in Varanasi",
    description:
      "An ancient haveli overlooking the ghats of the Ganges, where the evening Ganga Aarti unfolds right outside your window. One of the most spiritually immersive stays in India.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/varanasi-ghats/800/600",
    },
    price: 3600,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Hilltop Cottage in Coonoor",
    description:
      "A quiet Nilgiris cottage tucked among eucalyptus and tea gardens, with the toy train chugging past in the distance. Cooler and calmer than nearby Ooty, with the same sweeping views.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/coonoor-nilgiris/800/600",
    },
    price: 3400,
    location: "Coonoor",
    country: "India",
  },
  {
    title: "Backwater Villa in Kumarakom",
    description:
      "A private villa on Vembanad Lake with its own jetty, surrounded by paddy fields and coconut groves. Watch kingfishers dive at sunrise from your private deck.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/kumarakom-backwaters/800/600",
    },
    price: 5800,
    location: "Kumarakom",
    country: "India",
  },
  {
    title: "Stargazing Camp in Spiti Valley",
    description:
      "A high-altitude stone-and-timber camp in the cold desert of Spiti, with some of the clearest night skies in the country. Ancient monasteries and moonscapes surround you in every direction.",
    image: {
      filename: "listingimage",
      url: "https://picsum.photos/seed/spiti-valley-camp/800/600",
    },
    price: 4100,
    location: "Spiti Valley",
    country: "India",
  },
];

module.exports = { data: sampleListings };