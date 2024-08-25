import Uploadoncloudinary from "../File_upload/Coudinaryfile.js"
import GalleryModel from "../models/Gallerymodel.js"

export const AddGalleryData = async (req,res)=>{
    const {imgname,price,color,cloth_type,pattern,size}=req.body

// console.log("this is file",req.file.path)

// const imgurl=await Uploadoncloudinary(req.file.path)
// console.log ("this is cloudinery imgurl",imgurl)

    try{
        const GalleryData=await GalleryModel.create({
            "imgurl":imgurl,
            "imgname":imgname,
            "price":price,
            "color":color,
            "cloth_type":cloth_type,
            "pattern":pattern,
            "size":size
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
    const GetAllData = await GalleryModel.find()
    res.json({
        success:true,
        msg:" All Gallery Data Fetched Successfully",
        data:GetAllData
    })
}


