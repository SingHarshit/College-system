import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

let isConnected = false; // Track the connection state

export async function connectToDB() {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(MONGO_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw  Error("Database connection failed");
  }
}
