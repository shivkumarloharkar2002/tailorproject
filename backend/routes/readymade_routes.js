import express from "express"
import { AddReadymadeData , Getreadymade } from "../controller/Readymade_controller.js"
import { upload } from "../File_upload/multerfile.js"

const readymade_routes = express.Router()

readymade_routes.post("/addreadymade",upload.single("readymade_img"),AddReadymadeData)

readymade_routes.get('/getreadymadedata' , Getreadymade)

export default readymade_routes