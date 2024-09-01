import express from "express"
import { AddGalleryData, DeleteGallery, GetGalleryData, UpdateGallery } from "../controller/Gallery_controller.js"
import { upload } from "../File_upload/multerfile.js"

const gallery_routes = express.Router()

gallery_routes.post("/addgallery",upload.single("gallery_img"),AddGalleryData)

// gallery_routes.post("/addgallery", AddGalleryData)


gallery_routes.get('/getgalleryData',GetGalleryData)

gallery_routes.delete('/deleteGallery',DeleteGallery)


gallery_routes.put('/updateGallery', upload.single("gallery_img"),UpdateGallery)


export default gallery_routes
