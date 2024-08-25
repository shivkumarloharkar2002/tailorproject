import express from "express";
import { addmeasurement,GetMeasurementDatas,GetMeasurementData } from "./../controller/Measurement_controller.js";

const MeasurementRoutes = express.Router();

//  http://localhost:5555/api/measurementroutes/create
MeasurementRoutes.post("/create", addmeasurement);

//  http://localhost:5555/api/measurementroutes/gets
MeasurementRoutes.post("/gets", GetMeasurementDatas);


//  http://localhost:5555/api/measurementroutes/get/id
MeasurementRoutes.post("/get", GetMeasurementData);

export default MeasurementRoutes;
