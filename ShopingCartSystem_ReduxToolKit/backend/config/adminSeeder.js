import User from "../models/User.js";
import bcrypt from "bcrypt"
const AdminSeeding = async () => {
    try {
        const adminEmail = "admin@gmail.com";
        const existingAdmin = await User.findOne({ email: adminEmail });
        if (existingAdmin) {
            return;
        };
        const hashedPassword = await bcrypt.hash("Admin@12345", 10);
        const admin = new User({
            name: "Admin",
            email: adminEmail,
            password: hashedPassword,
            role: "admin"
        });
        await admin.save();
    } catch (error) {
        console.log("Error From AdminSeeding", error);
    }
}

export default AdminSeeding;