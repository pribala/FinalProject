const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cooking",//db name cooking
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

