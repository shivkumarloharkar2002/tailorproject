
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


// export const deletefabric = async (req, res) => {
//     const  {id} = req.params
//     try {
//         const fabric = await Fabricmodel.deleteOne({ _id: id })
//         res.json({
//             data: fabric,
//             msg: "deleted success"
//         })
//         const deleted = await cloudinary.uploader.destroy(fabric.img1)
//         console.log(deleted)
//     }
//     catch (e) {
//         console.log(e)
//     }
// }


export const deletefabric = async (req, res) => {
    const { id } = req.params
    try {
        const fabric = await Fabricmodel.findById(id);
        if (!fabric) {
            return res.status(404).json({
                msg: "Fabric not found"
            });
        }
        console.log(fabric)

        const imageUrl = fabric.img1;

        const publicId = imageUrl.split('/').pop().split('.')[0]; // Extract ID from URL
        console.log(publicId)

        const deleteImage = await cloudinary.uploader.destroy(publicId);  //aplyala image delte karnyasathi public id pahije aste (imageurl secureurl dili hoti tymule trim karavi lagli)
        console.log(deleteImage)
        
        // Check if the image was successfully deleted
        if (deleteImage.result !== 'ok') {
            return res.status(500).json({
                msg: "Error deleting image from Cloudinary",
                error: deleteImage
            });
        }

        // Delete the document from MongoDB
        const deleteDocument = await Fabricmodel.deleteOne({ _id: id });
        res.json({
            data: deleteDocument,
            msg: "Fabric deleted successfully"
        });
    }
    catch (e) {
        console.log(e)
    }
}


export const Updatefabric = async (req, res) => {
    // console.log("this is file", req.file.path)

    // const imgurl = await Uploadoncloudinary(req.file.path)

    const { id, title, color, price, cloth_type, fabric_type, pattern } = req.body

    try {
        const updated = await Fabricmodel.updateOne({ _id: id }, {
            $set: {
                "title": title,
                "price": price,
                "color": color,
                "cloth_type": cloth_type,
                "fabric_type": fabric_type,
                "pattern": pattern,
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