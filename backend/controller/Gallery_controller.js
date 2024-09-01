import Uploadoncloudinary from "../File_upload/Coudinaryfile.js"
import GalleryModel from "../models/Gallerymodel.js"
import NewGalleryModel from "../models/NewGalleryModel.js"

export const AddGalleryData = async (req, res) => {
    const { title, price, Color, cloth_type, pattern, size, description } = req.body

    console.log("this is file", req.file.path)

    const img = await Uploadoncloudinary(req.file.path)
    // console.log ("this is cloudinery imgurl",imgurl)

    try {
        const GalleryData = await NewGalleryModel.create({
            "img": img,
            "title": title,
            "price": price,
            "Color": Color,
            "cloth_type": cloth_type,
            "pattern": pattern,
            "size": size,
            "description": description
        })
        res.json({
            success: true,
            msg: "Gallery Data Added Successfully",
            data: GalleryData,
        })

    }
    catch (error) {
        res.json(error)
    }
}


// get api
export const GetGalleryData = async (req, res) => {
    const GetAllData = await NewGalleryModel.find()
    res.json({
        success: true,
        msg: " All Gallery Data Fetched Successfully",
        data: GetAllData
    })
}

// delete api
export const DeleteGallery = async (req, res) => {
    const {id} = req.params
    const fetch = await NewGalleryModel.deleteOne({ _id: id })
    res.json({
        _id: id,
        data: fetch,
        msg: "Gallery Data Deleted Successfully",
    })
}


// update api

export const UpdateGallery = async (req, res) => {

    console.log("this is file", req.file.path)

    const img = await Uploadoncloudinary(req.file.path)

    const { id, title, price, Color, cloth_type, pattern, size, description } = req.body

    try {
        const update = await NewGalleryModel.updateOne({ _id: id }, {
            $set: {
                "img": img,
                "title": title,
                "price": price,
                "Color": Color,
                "cloth_type": cloth_type,
                "pattern": pattern,
                "size": size,
                "description": description
            }
        })
        res.json({
        success:true,
        data:update,
        msg:`${title} is updated`
    })
    }
    catch(e){
        console.log(e)
    }
}
