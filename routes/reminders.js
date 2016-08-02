'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Reminder = mongoose.model('Reminder');
var router = express.Router();

router
.get('/reminders', (req, res) => {
  console.log('******************************************************************************************************');
  console.log('here');
  console.log('******************************************************************************************************');
  Reminder.find()
  .then(reminders => {
    res.json({reminders});
  })
  .catch(err => {
    return res.send(err);
  })
})
.post('/reminders', (req, res) => {
  let reminder = new Reminder(req.body);
  reminder.save()
  .then(reminder => {
    res.json(reminder);
  })
  .catch(err => {
    res.send(err);
  })
});

module.exports = router;