import express from "express"
import { Addshilai_rate, Allshilai_rate, ShilaiRate_delte, Shilai_rateUpdate } from "../controller/Shilai_rate_controller.js"

export const shilai_rateRoutes= express.Router()

//http://localhost:5555/api/shialiroutes/addshilairate
shilai_rateRoutes.post("/addshilairate",Addshilai_rate)

//http://localhost:5555/api/shialiroutes/updateshilairate
shilai_rateRoutes.put("/updateshilairate",Shilai_rateUpdate)

shilai_rateRoutes.get("/allrates",Allshilai_rate)

shilai_rateRoutes.delete("/deleterate/:id",ShilaiRate_delte)

