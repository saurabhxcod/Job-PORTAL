import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{dbName:"Job_PORTAL"})
        console.log("MongoDB Connected!!")
    } catch (err) {
        console.log("Error is",err);
    }
}

export default connectDB;