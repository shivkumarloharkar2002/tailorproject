import express from "express"
import { Deleteemployee, Getallusers, Updateuser, UserLogin, Userregister } from "../controller/User_controller.js"
import { upload } from "../File_upload/multerfile.js"
 const UserRoutes= express.Router()

//  http://localhost:5555/api/userroutes/create
UserRoutes.post("/create",upload.single("img"), Userregister)

// http://localhost:5555/api/userroutes/login
UserRoutes.post("/login",UserLogin)

// http://localhost:5555/api/userroutes/updateuser
UserRoutes.put("/updateuser",upload.single("img"),Updateuser)

// http://localhost:5555/api/userroutes/getallusers
UserRoutes.get("/getallusers", Getallusers)

// http://localhost:5555/api/userroutes/deleteuser/66c71964eaa7f9474c490fff
UserRoutes.delete("/deleteuser/:id",Deleteemployee)

export default UserRoutes