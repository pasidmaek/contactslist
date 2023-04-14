"use strict";

module.exports = function (app) {
  var contactList = require("../controllers/userListController");

  app
    .route("/contacts")
    .get(contactList.listAllContacts) //Show all users
    .post(contactList.createContact); // Insert a new user

  app
    .route("/contacts/:id")
    .get(contactList.readContact) // Show a particular user
    .delete(contactList.deleteContact) // Delete one user
    .post(contactList.updateContact); // Update one userS

  app.route("/login").get(contactList.usernameAndPassword);
};
