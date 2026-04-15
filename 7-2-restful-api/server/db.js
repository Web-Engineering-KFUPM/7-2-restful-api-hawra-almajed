import mongoose from "mongoose";

export const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Mongo connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    process.exit(1);
  }
};