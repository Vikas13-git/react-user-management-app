import express from "express";
import cors from "cors";
import process from "node:process";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin:
        process.env.CLIENT_URL  ||
        "http://localhost:5173"
    })
);

app.get("/api/health",(request,response)=>{
    return response.status(200).json({
        status: "ok",
        message: "User Management API is running"
    });
});

app.use("/api/users",userRoutes);

export default app;
