import express from "express";
import {
  addShirtMeasurement,
  addPantMeasurement,
  //   addKurtaMeasurement,
  //   addPayjamaMeasurement,
  addSafariMeasurement,
  GetMeasurementDatas,
  GetMeasurementData,
} from "./../controller/Measurement_controller.js";

const MeasurementRoutes = express.Router();

//  http://localhost:5555/api/measurementroutes/shirt
MeasurementRoutes.post("/shirt", addShirtMeasurement);

//  http://localhost:5555/api/measurementroutes/pant
MeasurementRoutes.post("/pant", addPantMeasurement);

// //  http://localhost:5555/api/measurementroutes/kurta
// MeasurementRoutes.post("/kurta", addKurtaMeasurement);

// //  http://localhost:5555/api/measurementroutes/payjama
// MeasurementRoutes.post("/payjama", addPayjamaMeasurement);

//  http://localhost:5555/api/measurementroutes/safari
MeasurementRoutes.post("/safari", addSafariMeasurement);

//  http://localhost:5555/api/measurementroutes/gets
MeasurementRoutes.post("/gets", GetMeasurementDatas);

//  http://localhost:5555/api/measurementroutes/get/id
MeasurementRoutes.post("/get", GetMeasurementData);

export default MeasurementRoutes;
