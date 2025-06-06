import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const connectDb = async () => {
  try {
    const mongoUrl =
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_URL_PROD
        : process.env.MONGO_URL_DEV;

    const conn = await mongoose.connect(mongoUrl);

    console.log(`✅ MongoDB Connected: ${conn.connection.host} (${process.env.NODE_ENV})`);
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDb;
