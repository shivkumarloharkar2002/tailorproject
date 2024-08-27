import express from "express";
import { AddFabric, Updatefabric, deletefabric, getallfabric } from "../controller/Fabric_controller.js";

import { upload } from "../File_upload/multerfile.js";



export const FabricRoutes = express.Router()

FabricRoutes.post("/addfabric",upload.single("imgfile"), AddFabric)
// FabricRoutes.post("/addfabric", AddFabric)

FabricRoutes.get("/getallfabric",getallfabric)


FabricRoutes.delete("/deletefabric/:id",deletefabric)

FabricRoutes.put("/updatefabric",Updatefabric)
