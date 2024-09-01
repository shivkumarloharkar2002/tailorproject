import express from "express"
import { Shilai_rate_controller } from "../controller/Shilai_rate_controller.js"

export const shilai_rateRoutes= express.Router()

shilai_rateRoutes.post("/addshilairate",Shilai_rate_controller)