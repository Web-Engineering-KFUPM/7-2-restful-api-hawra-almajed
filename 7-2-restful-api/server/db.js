/** ===========================================
 *  db.js — Mongo connection helper
 *  -------------------------------------------
 *  TASK DB-1:
 *    - Export connectDB() that connects Mongoose using MONGO_URL
 *    - Log success; throw on failure
 */
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

export async function connectDB(url) {
  try {
    await mongoose.connect(url);
    console.log("[DB] Mongo connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    throw err;
  }
}
