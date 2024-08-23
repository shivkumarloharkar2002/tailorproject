import express from "express"
import { AddGalleryData, GetGalleryData } from "../controller/Gallery_controller"

const gallery_routes = express.Router()

gallery_routes.post("/addgallery",AddGalleryData)

gallery_routes.get('/getgalleryData',GetGalleryData)

export default gallery_routes