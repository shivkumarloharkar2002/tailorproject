import { CustomerRoutes } from "../routes/Customer_routes.js";
import { FabricRoutes } from "../routes/fabric_routes.js";
import gallery_routes from "../routes/gallery_routes.js";
import UserRoutes from "../routes/user_routes.js";
import MeasurementRoutes from "../routes/measurement_routes.js";
import express from "express"
import { OrderRoutes } from "../routes/Order_routes.js";
import readymade_routes from "../routes/readymade_routes.js";
import { shilai_rateRoutes } from "../routes/shilai_routes.js";

const Allrouters = express.Router() 

Allrouters.use("/userroutes",UserRoutes)

Allrouters.use("/fabricroutes",FabricRoutes)

Allrouters.use("/gallaryroutes", gallery_routes)

Allrouters.use("/customerroutes",CustomerRoutes)

Allrouters.use("/measurementroutes", MeasurementRoutes)

Allrouters.use("/orderroutes", OrderRoutes)

Allrouters.use("/readymaderoutes",readymade_routes)

Allrouters.use("/shialiroutes",shilai_rateRoutes)

export default Allrouters