"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String,
    Required: "Please enter",
  },
  lastname: {
    type: String,
    Required: "Please enter",
  },
  email: {
    type: String,
    Required: "Please enter",
  },
  mobile: {
    type: String,
    Required: "Please Enter",
  },
  facebook: {
    type: String,
    Required: "Please Enter",
  },
  imageUrl: {
    type: String,
    Required: "Please Enter",
  },
});

var usernameAndPasswordSchema = new Schema({
  username: {
    type: String,
    Required: "Please enter",
  },
  password: {
    type: String,
    Required: "Please enter",
  },
});

const Contacts = mongoose.model("contacts", UserSchema);
const Login = mongoose.model("login", usernameAndPasswordSchema);

module.exports = {
  Contacts,
  Login,
};
