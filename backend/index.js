import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import { UserRoutes } from './routes/user_routes.js';

const app = express()
app.use(express.json())
app.use(cors())
const port = 5555

const database =async ()=>{
    await mongoose.connect("mongodb+srv://shivkumarloharkar:Tny9dZwuwEYHTE9t@cluster0.efn3se0.mongodb.net/Tailor_project")
    console.log("Database connected")
}
database()

app.listen(port,()=>{
    console.log(`${port} is connected`)
})


app.get("/",(req,res)=>{
    res.send("hiii")
})

app.use("/user",UserRoutes)