import express from "express"
import { AddReadymadeData , DeleteReady, Getreadymade, UpdateReady } from "../controller/Readymade_controller.js"
import { upload } from "../File_upload/multerfile.js"

const readymade_routes = express.Router()

readymade_routes.post("/addreadymade",upload.single("readymade_img"),AddReadymadeData)

readymade_routes.get('/getreadymadedata' , Getreadymade)

readymade_routes.delete('/deletereadymade/:id',DeleteReady)

readymade_routes.put('/updatereadymade', upload.single("readymade_img"),UpdateReady)

export default readymade_routes