// Requirements
var express = require('express');
var path = require('path');
var serverless = require('serverless-http');
var bodyParser = require('body-parser');
var cors = require('cors')
var dataRouter = require('./routes/router.js');

// Create express instance
var app = express();

// Views setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files setup
app.use(express.static(path.join(__dirname, 'public')));

// Middleware setup
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route setup
app.use('/', dataRouter);
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
