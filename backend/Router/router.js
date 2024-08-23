import { FabricRoutes } from "../routes/fabric_routes.js";
import UserRoutes from "../routes/user_routes.js";
import express from "express"

const Allrouters = express.Router() 

Allrouters.use("/userroutes",UserRoutes)

Allrouters.use("/fabricroutes",FabricRoutes)

export default Allrouters