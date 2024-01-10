const mongoose = require('mongoose');

const { Schema } = mongoose;

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  position: {
    type: {
      x: {
        type: Number,
        required: true,
      },
      y: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
});

module.exports = mongoose.model('Character', CharacterSchema);
