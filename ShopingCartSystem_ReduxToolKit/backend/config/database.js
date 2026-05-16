import mongoose from "mongoose";
import AdminSeeding from "../config/adminSeeder.js"
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        await AdminSeeding();
        console.log("Mongo DB Connected");
    } catch (error) {
        console.log("Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;