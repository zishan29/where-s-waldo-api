import mongoose, { type Document } from 'mongoose';

const { Schema } = mongoose;

interface User extends Document {
  name: string;
  score: number;
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  score: { type: Number, required: true },
});

export default mongoose.model<User>('User', UserSchema);
