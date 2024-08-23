import express from "express";
import { AddFabric } from "../controller/Fabric_controller.js";

export const FabricRoutes = express.Router()

FabricRoutes.post("/addfabric",AddFabric)