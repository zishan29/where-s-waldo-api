const mongoose = require('mongoose');

const { Schema } = mongoose;

const CharacterSchema = new Schema({
  name: { type: String, required: [true, 'Please provide a name'] },
  position: {
    type: {
      x: {
        type: String,
        required: true,
      },
      y: {
        type: String,
        required: true,
      },
    },
    required: [true, 'Please provide correct coordinates'],
  },
});

module.exports = mongoose.model('Character', CharacterSchema);
