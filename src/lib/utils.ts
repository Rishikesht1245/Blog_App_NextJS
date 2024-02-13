import mongoose from "mongoose";

const connection: { isConnected: any } = { isConnected: false };
export const connectToDb = async () => {
  try {
    // To prevent new connection when app crashes
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error :", error);
    throw new Error("Error in database");
  }
};
