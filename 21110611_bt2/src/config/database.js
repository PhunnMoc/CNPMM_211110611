import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('Error connecting MongoDB:', error);
  }
};

export default connectDb;
