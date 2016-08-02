'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  alexaUserId: String,
  reminders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reminder'}]
});

mongoose.model('User', UserSchema);