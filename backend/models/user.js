//Initializing the model schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create the contact model schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

//Package and export the model
const User = mongoose.model("User", userSchema, "users");
module.exports = User;