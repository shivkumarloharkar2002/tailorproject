import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import  UserRoutes from './routes/user_routes.js';
import Database from './Database/database.js';
import Allrouters from './Router/router.js';

const app = express()
app.use(express.json())
app.use(cors())
const port = 5555

Database()

app.listen(port,()=>{
    console.log(`${port} is connected`)
})

app.get("/",(req,res)=>{
    res.send("hiii")
})

// app.use("/user",UserRoutes)

app.use("/api",Allrouters)