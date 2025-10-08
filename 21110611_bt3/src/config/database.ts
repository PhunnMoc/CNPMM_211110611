import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbUrl = process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/mydb';

const connectDb = async (): Promise<typeof mongoose> => {
  // Note: since mongoose v6+, options like useNewUrlParser/useUnifiedTopology are default
  return mongoose.connect(dbUrl);
};

export default connectDb;
