# 🌍 Wanderlust – Discover Your Next Stay

**Wanderlust** is a full-stack accommodation listing web application inspired by Airbnb. It allows users to explore places to stay, create and manage property listings, upload images, and discover property locations through interactive maps.

The project is built using the MERN ecosystem's backend technologies along with EJS for server-side rendering.

## ✨ Features

- 🔐 **User Authentication** – User registration and login.
- 🏡 **Property Listings** – Create, view, edit and delete accommodation listings.
- 🖼️ **Image Uploads** – Upload and manage listing images using Cloudinary.
- 📍 **Interactive Maps** – Display listing locations using Mapbox.
- ⭐ **Reviews & Ratings** – Users can add reviews to listings.
- 👤 **User Authorization** – Manage listing ownership and access.
- 📱 **Responsive UI** – Responsive interface using Bootstrap.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Frontend | EJS, HTML, CSS, JavaScript |
| UI Framework | Bootstrap |
| Authentication | Passport.js |
| Image Storage | Cloudinary |
| Maps & Geocoding | Mapbox |
| Version Control | Git, GitHub |

## 📸 Application Preview

<!-- Add your project screenshots here -->

| Home Page | Listing Details |
|---|---|
| Add home page screenshot | Add listing screenshot |

| Create Listing | Interactive Map |
|---|---|
| Add create listing screenshot | Add map screenshot |

## ⚙️ Installation & Setup

Follow these steps to run Wanderlust locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd wanderlust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

Replace the placeholder values with your actual credentials.

### 5. Start the application

```bash
node app.js
```

For development with Nodemon:

```bash
nodemon app.js
```

### 6. Open in browser

```text
http://localhost:8080
```

## 📂 Project Structure

```text
wanderlust/
│
├── controllers/       # Application business logic
│
├── models/            # Mongoose database models
│
├── routes/            # Express routes
│
├── views/             # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
│
├── public/            # Static CSS and JavaScript
│
├── utils/             # Utility functions
│
├── middleware.js      # Custom middleware
├── cloudConfig.js     # Cloudinary configuration
├── app.js             # Main application entry point
├── .env               # Environment variables
└── package.json       # Project dependencies
```

## 🔒 Security

- Environment variables are used to manage sensitive credentials.
- Authentication and authorization middleware protect application routes.
- Listing ownership is used to control listing management permissions.
- Session management uses MongoDB-backed session storage.

**Never commit your `.env` file or expose API secrets publicly.**

## 🎯 Learning Outcomes

Through this project, I explored:

- Building RESTful applications using Express.js.
- Implementing CRUD operations with MongoDB and Mongoose.
- User authentication and authorization.
- Handling file uploads with Multer and Cloudinary.
- Integrating third-party APIs such as Mapbox.
- Working with Express middleware and session management.
- Structuring a full-stack web application using MVC architecture.

## 👨‍💻 Author

**Vansh Chaudhary**

---

⭐ If you like this project, consider giving it a star!
