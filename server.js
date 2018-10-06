const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index");
// import App from "./client/src/App";
//require axios for internal api calls
const logger = require("morgan");//
const Promise = require("bluebird");//
const axios = require("axios");

mongoose.Promise = Promise;//

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// app.use(bodyParser.json());
// Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);
// app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/receipt");
const db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
})

db.once("open", function() {
  console.log("Mongoose connection successful.")
})

// Routes
// app.get("/", function(req, res){
//   res.send(index.html);
//   console.log(req);
//   console.log(res);
// })

// app.post("./submit", function(req, res){
//   var user = new Example(req.body);
//   console.log(req);
//   console.log(res);
// // });
// user.getFullName();
// user.lastUpdatedDate();
//   user.save(function(error, doc){
//     if (error) {
//       res.send(error);
//     }
//     else{
//       res.send(doc);
//     }
//   })
// });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/receipt");
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
