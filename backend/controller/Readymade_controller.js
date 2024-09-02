import Uploadoncloudinary from "../File_upload/Coudinaryfile.js";
import Readymade from "../models/Readymademodel.js";


export const AddReadymadeData = async(req , res)=>{
    const {title , price , color , cloth_type , pattern , size  ,des ,offer} = req.body;

    console.log("this is file",req.file.path)

    const img=await Uploadoncloudinary(req.file.path)
//post api
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


//get api

export const Getreadymade = async ( req , res)=>{
    const GetallData = await Readymade.find()
    res.json({
        success:true,
        msg:"Data fetched successfully",
        data:GetallData
    })
}

// delete api

export const DeleteReady = async (req, res) => {
    const {id} = req.params
    const fetch = await Readymade.deleteOne({ _id: id })
    res.json({
        _id: id,
        data: fetch,
        msg: "Cloth  Deleted Successfully",
    })
}

//update api



export const UpdateReady = async (req, res) => {

    console.log("this is file", req.file.path)

    const img = await Uploadoncloudinary(req.file.path)

    const { title , price , color , cloth_type , pattern , size  ,des ,offer , id} = req.body

    try {
        const update = await Readymade.updateOne({ _id: id }, {
            $set: {
                "img":img,
                "title":title,
                "price":price,
                "color":color,
                "cloth_type":cloth_type,
                "pattern":pattern,
                "size":size,
                "des":des,
                "offer":offer
            }
        })
        res.json({
        success:true,
        data:update,
        msg:`${cloth_type} is updated`
    })
    }
    catch(e){
        console.log(e)
    }
}