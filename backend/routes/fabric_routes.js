import express from "express";
import { AddFabric, getallfabric } from "../controller/Fabric_controller.js";

import multer from "multer"
import { upload } from "../File_upload/multerfile.js";

const uploadimg= multer({dest:"./imguploads"})

export const FabricRoutes = express.Router()

FabricRoutes.post("/addfabric",upload.single("file"), AddFabric)


FabricRoutes.get("/getallfabric",getallfabric)