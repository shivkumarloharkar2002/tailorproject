import express from "express"
import { CreateOrder, Getorderdata } from "../controller/Order_controller.js"

export const OrderRoutes= express.Router()

// http://localhost:5555/api/orderroutes/addorder
OrderRoutes.post("/addorder",CreateOrder)

// http://localhost:5555/api/orderroutes/getallorder
OrderRoutes.get("/getallorder",Getorderdata)
