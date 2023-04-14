var express = require("express");
const serverless = require("serverless-http");
app = express();
const router = express.Router();

mongoose = require("mongoose");
app.use('/.netlify/functions', router)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

const cors = require("cors");

port = process.env.PORT || 5000;

User = require("./models/userListModel");
mongoose.Promise = global.Promise;
/* url = "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-iigjh/endpoint/data/v1" */
url =
  "mongodb+srv://pasidmaekkum:cvTJu9q7DOVlScwZ@contactlist.d3otiak.mongodb.net/test";
/* url = "mongodb://127.0.0.1/ContactList"; */
mongoose.connect(url, function (error) {
  if (error) throw error;
  console.log("Successfully connnected");
});

/* const { appendFile } = require("fs"); */
app.use(cors());

var routes = require("./routes/userListRoutes");
routes(app);
app.listen(port);
console.log("UserList started on : http://localhost:" + port);
module.exports.handler = serverless(app);
