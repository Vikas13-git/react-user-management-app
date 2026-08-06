import "dotenv/config";
import process from "node:process";
import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "userManagement"
        });

        console.log("Connected to MongoDB");
        app.listen(PORT, () =>{
            console.log(
                `Server is running on http://localhost:${PORT}`
            );
        });
    }catch(error){
        console.error(
            "Failed to connect to MongoDB",
            error.message
        );
    }
};

startServer();
