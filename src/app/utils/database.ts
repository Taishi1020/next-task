import mongoose from 'mongoose';

export const connectDb = async () => {
  const dbUri = process.env.MONGODB_URI ?? '';
  try {
    await mongoose.connect(dbUri);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
