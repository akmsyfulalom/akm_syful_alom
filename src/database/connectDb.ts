import config from "@/config"
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongodbUri = config.MONGODB_URI;

        if(!mongodbUri){
            throw new Error("MongoDB URI is not difined. ")
        }

        await mongoose.connect(mongodbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, 
            socketTimeoutMS: 30000, 
        } as any)
        console.log("Connected to MongoDB Database.");
    } catch (error) {
            console.error("Error connecting to MongoDB:", error);

    }

}

export default connectDB;