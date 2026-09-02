import mongoose from "mongoose";

/** Connects to MongoDB. The server keeps running even if Mongo is down, so
 *  the frontend can still be developed against the offline catalogue. */
export default async function connectDB() {
  try {
    const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/cookme";
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.error(`MongoDB connection failed: ${err.message}`);
    console.error("Start MongoDB and restart the server, or run `npm run seed`.");
    return null;
  }
}
