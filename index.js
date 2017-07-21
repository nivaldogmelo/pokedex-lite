'use strict';

// Calling dependencies
var express = require('express');
var favicon = require('serve-favicon');

// Defining Express
var app = express();

// Serving static files
app.use(express.static('client'));

// Calling and Using Pokefinder route
var pokefinder = require('./routes/pokefinder');
app.use(pokefinder);

// Setting Icon
app.use(favicon(__dirname + '/client/favicon.ico'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('Example app listening on port: ' + port +'!');
});