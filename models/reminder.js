'use strict';

var mongoose = require('mongoose');

var ReminderSchema = new mongoose.Schema({
  alexaUserId: String,
  reminderDate: String,
  reminderTime: String,
  reminder: String
});

mongoose.model('Reminder', ReminderSchema);