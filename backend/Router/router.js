import { CustomerRoutes } from "../routes/Customer_routes.js";
import { FabricRoutes } from "../routes/fabric_routes.js";
import gallery_routes from "../routes/gallery_routes.js";
import UserRoutes from "../routes/user_routes.js";
import MeasurementRoutes from "../routes/measurement_routes.js";
import express from "express"
import { OrderRoutes } from "../routes/Order_routes.js";

const Allrouters = express.Router() 

Allrouters.use("/userroutes",UserRoutes)

Allrouters.use("/fabricroutes",FabricRoutes)

Allrouters.use("/gallaryroutes", gallery_routes)

Allrouters.use("/customerroutes",CustomerRoutes)

Allrouters.use("/measurementroutes", MeasurementRoutes)

Allrouters.use("/orderroutes", OrderRoutes)
export default Allrouters