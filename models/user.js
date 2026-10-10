const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  // Password-local-mongoose automatically creates the username and password.
});
User.plugin(passwordLocalMongoose); //This automatically creates username and password(salting,hashed password).

module.exports = mongoose.model("User", userSchema);
