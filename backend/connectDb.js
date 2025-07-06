import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  dotenv.config();

  try {
    await mongoose.connect(process.env.MONGODB_CONN, { dbName: "portfolio" });
    console.log("Database Connected");
  } catch (error) {
    console.log(`Error in Connecting to Database with Error: ${err}`);
  }
};
