import mongoose from "mongoose";
const connectToMongoDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://uic19mca8168:0cW0EPn7DDB9aF4s@cluster0.udcnwfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB");
    } catch (error){
        console.log("Error connecting to MongoDB")
    }
}

export default connectToMongoDB;