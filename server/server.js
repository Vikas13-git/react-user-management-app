import express from "express";
import process from "node:process";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
import cors from "cors";
const  app = express();
app.use(express.json());
app.use(
    cors({
        origin:
            process.env.CLIENT_URL ||
            "http://localhost:5173"
    })
);
app.get("/api/health",(request,response) =>{
    return response.status(200).json({
        status: "ok",
        message: "User Management API is running"
    });
});
app.use("/api/users",userRoutes);
const PORT = process.env.PORT || 5000;
const startServer = async () =>{
try{
    await mongoose.connect(process.env.MONGODB_URI,{
    dbName:"userManagement"
    });
    console.log("Connected to MongoDB");

    app.listen(PORT,() => {
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
