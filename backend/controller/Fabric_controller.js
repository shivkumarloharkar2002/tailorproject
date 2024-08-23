
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name:"dcjsbbvdz",
    api_key:"133689443769167",
    api_secret:"iPEI_f2aND0WeDHGHjpY6w2YhxQ"
})

export const AddFabric = async (req,res)=>{
    const fabric_id = "fabricId" + Math.floor((Math.random()*10000000))

    const file = req.file.path;
    // cloudinary.uploader.upload(file,(error,result)=>{
    //     console.log(result);
    // })
    try{
   const uploadimg= await cloudinary.uploader.upload(file)
   console.log(uploadimg)
    }
    catch(e){
        console.log(e)
    }

    const {title,color,price,cloth_type,fabric_type,pattern,img1} = req.body
    

}