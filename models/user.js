const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plm = require("passport-local-mongoose");
const passportLocalMongoose = plm.default || plm;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  // Password-local-mongoose automatically creates the username and password.
});
userSchema.plugin(passportLocalMongoose, {
  usernameLowerCase: true,
  errorMessages: {
    UserExistsError: "A user with the given username is already registered",
  },
});

module.exports = mongoose.model("User", userSchema);
