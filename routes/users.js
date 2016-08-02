'use strict';

var express = require('express');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Reminder = mongoose.model('Reminder');
var router = express.Router();

var populateRemindersQuery = [
  {
    path: 'reminders',
    model: 'Reminder'
  }
];


router
.get('/users', (req, res) => {
  User.find()
  .populate(populateRemindersQuery)
  .exec()
  .then(users => {
    res.json({users});
  })
  .catch(err => {
    return res.send(err);
  })
})
.post('/users', (req, res, next) => {
  let user = new User(req.body);
  user.save()
  .then(() => {
    res.json(user);
  })
  .catch(err => {
    return res.send(err);
  })
});

module.exports = router;