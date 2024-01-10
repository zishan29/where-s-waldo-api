import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
});

export default mongoose.model('User', UserSchema);
