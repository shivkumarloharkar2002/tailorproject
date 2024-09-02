import express from "express"
import { Addshilai_rate, Shilai_rateUpdate } from "../controller/Shilai_rate_controller.js"

export const shilai_rateRoutes= express.Router()

//http://localhost:5555/api/shialiroutes/addshilairate
shilai_rateRoutes.post("/addshilairate",Addshilai_rate)

//http://localhost:5555/api/shialiroutes/updateshilairate
shilai_rateRoutes.put("/updateshilairate",Shilai_rateUpdate)