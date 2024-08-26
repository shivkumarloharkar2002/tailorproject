import Uploadoncloudinary from "../File_upload/Coudinaryfile.js"
import GalleryModel from "../models/Gallerymodel.js"
import NewGalleryModel from "../models/NewGalleryModel.js"

export const AddGalleryData = async (req,res)=>{
    const {title,price,Color,cloth_type,pattern,size,description}=req.body

console.log("this is file",req.file.path)

const img=await Uploadoncloudinary(req.file.path)
// console.log ("this is cloudinery imgurl",imgurl)

    try{
        const GalleryData=await NewGalleryModel.create({
            "img":img,
            "title":title,
            "price":price,
            "Color":Color,
            "cloth_type":cloth_type,
            "pattern":pattern,
            "size":size,
            "description":description
        })
        res.json({
            success:true,
            msg:"Gallery Data Added Successfully",
            data:GalleryData,
        })

    }
    catch (error){
        res.json(error)
    }
}


// get api
export const GetGalleryData = async (req,res)=>{
    const GetAllData = await NewGalleryModel.find()
    res.json({
        success:true,
        msg:" All Gallery Data Fetched Successfully",
        data:GetAllData
    })
}


