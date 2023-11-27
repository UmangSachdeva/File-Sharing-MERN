import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const DB = process.env.MONGO_DB_URI;
const PASSWORD = process.env.PASSWORD;
const DBConnection = async () => {
  try {
    await mongoose.connect(DB.replace("<PASSWORD>", PASSWORD), {
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with database", error.message);
  }
};

export default DBConnection;
