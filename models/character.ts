import mongoose, { type Document } from 'mongoose';

const { Schema } = mongoose;

interface CharacterPosition {
  x: number;
  y: number;
}

interface Character extends Document {
  name: string;
  position: CharacterPosition;
}

const CharacterSchema = new Schema<Character>({
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

export default mongoose.model<Character>('Character', CharacterSchema);
