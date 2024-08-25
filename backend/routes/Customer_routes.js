import express from "express"
import { AllCustomerdata, Customerregister } from "../controller/Customer_controller.js"

export const CustomerRoutes = express.Router()

CustomerRoutes.post("/create",Customerregister)

CustomerRoutes.get("/getcustomer",AllCustomerdata)