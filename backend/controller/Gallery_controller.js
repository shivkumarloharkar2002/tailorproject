import GalleryModel from "../models/Gallerymodel"

export const AddGalleryData = async (req,res)=>{
    const {imgname,price,color,cloth_type,pattern,size}=req.body

    try{
        const GalleryData=await GalleryModel.create({
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
    const Alldata=await GalleryModel.find()
    res.json({
        success:true,
        msg:" All Gallery Data Fetched Successfully",
        data:Alldata
    })
}











