const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model('User', UserSchema);
