import dotenv from 'dotenv';

dotenv.config({
    path:'./.env'
})

import express from 'express';
const app=express();

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