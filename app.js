var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//models
require('./models/reminder');

//routes
var reminders = require('./routes/reminders');

var app = express(); //Create the Express app

mongoose.connect(process.env.DB);
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', reminders);

module.exports = app;
