import express from "express"
import { Getallusers, Updateuser, UserLogin, Userregister } from "../controller/User_controller.js"
 const UserRoutes= express.Router()

//  localhost:5555/api/userroutes/create
UserRoutes.post("/create", Userregister)

// localhost:5555/api/userroutes/login
UserRoutes.post("/login",UserLogin)

UserRoutes.put("/updateuser",Updateuser)

UserRoutes.get("/getallusers", Getallusers)

export default UserRoutes