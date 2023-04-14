"use strict";

const jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var User = mongoose.model("contacts");
var Username = mongoose.model("login");

exports.listAllContacts = function (req, res) {
  var query = { sort: { firstName: 1 } };
  User.find({}, null, query, function (err, contacts) {
    if (err) throw err;
    /* console.log(contacts); */
    res.json(contacts);
  });
};

exports.createContact = function (req, res) {
  var newUser = new User(req.body);
  /* console.log(req.body); */
  newUser.save(function (err, contacts) {
    if (err) throw err;
    res.json(contacts);
  });
};

exports.readContact = function (req, res) {
  /* console.log(req.params.id); */
  User.findById(req.params.id, function (err, contacts) {
    if (err) throw err;
    res.json(contacts);
  });
};

exports.deleteContact = function (req, res) {
  /* console.log(req.params.id); */
  User.findByIdAndRemove(req.params.id, function (err, contacts) {
    if (err) throw err;
    const response = {
      message: "Delete user id : " + req.params.id,
      id: contacts._id,
    };
    res.json(response);
  });
};

exports.updateContact = function (req, res) {
  /* console.log(req.params.id); */
  var newUser = {};
  newUser = req.body;
  User.findByIdAndUpdate(
    req.params.id,
    newUser,
    { new: true },
    function (err, contacts) {
      if (err) throw err;
      /* console.log(contacts); */
      res.json(contacts);
    }
  );
};

exports.usernameAndPassword = function (req, res) {
  var query = {};
  Username.find({}, null, query, function (err, user) {
    if (err) throw err;
    console.log(user);
    res.json(user);
  });
};