import mongoose from 'mongoose';

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

export default mongoose.model('Character', CharacterSchema);
