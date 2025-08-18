// import dotenv from 'dotenv';

// dotenv.config({
//     path:'./.env'
// })

import authRouter from '../src/routes/auth.route.js';
import userRouter from './routes/user.route.js';
import express from 'express';
import cookieParser from "cookie-parser";
const app=express();
app.use(express.json())

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
import connectDB from './db/databaseConnection.js';
connectDB()
    .then(()=>{
        app.listen(process.env.PORT,()=>{
        console.log("Server running on port",process.env.PORT);
    });
})
    .catch((error)=>{
        console.log("Server connection failed",error);
});



app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);