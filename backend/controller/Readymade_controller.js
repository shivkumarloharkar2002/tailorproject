import Uploadoncloudinary from "../File_upload/Coudinaryfile.js";
import Readymade from "../models/Readymademodel.js";


export const AddReadymadeData = async(req , res)=>{
    const {title , price , color , cloth_type , pattern , size  ,des ,offer} = req.body;

    console.log("this is file",req.file.path)

    const img=await Uploadoncloudinary(req.file.path)

    try{
        const ReadymadeData = await Readymade.create({
            "img":img,
            "title":title,
            "price":price,
            "color":color,
            "cloth_type":cloth_type,
            "pattern":pattern,
            "size":size,
            "des":des,
            "offer":offer
        })
        res.json({
            success:true,
            msg:"Data stored successfully",
            data:ReadymadeData
        })
    }catch(error){
        res.json(error)
    }
}


export const Getreadymade = async ( req , res)=>{
    const GetallData = await Readymade.find()
    res.json({
        success:true,
        msg:"Data fetched successfully",
        data:GetallData
    })
}