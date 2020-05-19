// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitList = [];

//routes
//homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
//reservepage
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
//tables page
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
//all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});
//all reservations
app.get("/api/waitList", function(req, res) {
    return res.json(waitList);
});
// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
  });

  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  