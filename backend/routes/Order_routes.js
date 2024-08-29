import express from "express"
import { CreateOrder, Deleteorder, Getorderdata, Updateorder } from "../controller/Order_controller.js"

export const OrderRoutes= express.Router()

// http://localhost:5555/api/orderroutes/addorder
OrderRoutes.post("/addorder",CreateOrder)

// http://localhost:5555/api/orderroutes/getallorder
OrderRoutes.get("/getallorder",Getorderdata)


// http://localhost:5555/api/orderroutes/updateorderstatus
OrderRoutes.put("/updateorderstatus",Updateorder)


// http://localhost:5555/api/orderroutes/deleteorder/id
OrderRoutes.delete("/deleteorder/:id",Deleteorder)
