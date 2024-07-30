import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
