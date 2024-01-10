const mongoose = require('mongoose');

const { Schema } = mongoose;

const CharacterSchema = new Schema({
  name: { type: String, required: [true, 'Please provide a name'] },
  boundingBox: {
    topLeft: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
    bottomRight: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
  },
});
module.exports = mongoose.model('Character', CharacterSchema);
