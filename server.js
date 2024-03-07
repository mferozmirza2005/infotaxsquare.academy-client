'use strict';
var path = require('path');
var express = require('express');
var { io } = require('socket.io-client');

var app = express();

const socket = io("http://localhost:3000/", {
    autoConnect: true,
    host: "localhost",
    port: 5000
});

var staticPath = path.join(__dirname, '/public/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
    console.log(`listening on http://127.0.0.1:${app.get('port')}`);
});