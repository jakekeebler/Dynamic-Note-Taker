// Require dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Init express app
var app = express();
var PORT = process.env.PORT || 3001;

// Get assets
app.use(express.static('public'));

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require routes.js
require('./routes/routes.js')(app);

// Setup listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
