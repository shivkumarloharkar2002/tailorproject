
import { v2 as cloudinary } from "cloudinary"
import Uploadoncloudinary from "../File_upload/Coudinaryfile.js"
import Fabricmodel from "../models/fabric_model.js"


export const AddFabric = async (req, res) => {

    console.log("this is file", req.file.path)

    const imgurl = await Uploadoncloudinary(req.file.path)

    const fabric_id = "fabricId" + Math.floor((Math.random() * 10000000))

    const { title, color, price, cloth_type, fabric_type, pattern } = req.body

    try {

        const fabricdata = await Fabricmodel.create({
            title, color, price, cloth_type, fabric_type, pattern,
            "img1": imgurl,
            fabric_id
        })
        res.json({
            success: true,
            data: fabricdata,
            msg: `fabric added`
        })

    }
    catch (e) {
        res.send(e)
    }
}

export const getallfabric = async (req, res) => {
    const alldata = await Fabricmodel.find()
    res.json({
        success: true,
        msg: "all fabric",
        data: alldata
    })
}


export const deletefabric = async (req, res) => {
    const  {id} = req.params
    try {
        let fabric = await Fabricmodel.deleteOne({ _id: id })
        res.json({
            data: fabric,
            msg: "deleted success"
        })
        const deleted = await cloudinary.uploader.destroy(fabric.img1)
        console.log(deleted)
    }
    catch (e) {
        console.log(e)
    }
}


export const Updatefabric = async (req, res) => {
    // console.log("this is file", req.file.path)

    // const imgurl = await Uploadoncloudinary(req.file.path)

    const {id, title, color, price, cloth_type, fabric_type, pattern } = req.body

    try {
        const updated = await Fabricmodel.updateOne({ _id: id }, {
            $set: {
                "title": title,
                "price": price,
                "color": color,
                "cloth_type": cloth_type,
                "fabric_type": fabric_type,
                "pattern":pattern,
                // "img1":"link"
            }
        })
        res.json({
            success: true,
            data: updated,
            msg: `${title} is updated`
        })
    }
    catch (e) {
        console.log(e)
    }
}