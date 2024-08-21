import express from "express"
import { Getallusers, UserLogin, Userregister } from "../controller/User_controller.js"
export const UserRoutes= express.Router()


UserRoutes.post("/create", Userregister)

UserRoutes.post("/login",UserLogin)

UserRoutes.get("/getallusers", Getallusers)
