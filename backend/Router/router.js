import UserRoutes from "../routes/user_routes.js";
import express from "express"

const Allrouters = express.Router() 

Allrouters.use("/userroutes",UserRoutes)

export default Allrouters