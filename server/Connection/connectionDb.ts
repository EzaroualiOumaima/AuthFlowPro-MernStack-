
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const {MOMGO_URL} = process.env
mongoose.connect(MOMGO_URL!)

mongoose.connection.on("connected" ,()=> {
    console.log("Database connected");
    
})
mongoose.connection.on("error" ,()=> {
    console.log("error");
    
})