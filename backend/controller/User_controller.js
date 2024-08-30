import Uploadoncloudinary from "../File_upload/Coudinaryfile.js"
import Usermodel from "../models/usermodel.js"
import { v2 as cloudinary } from "cloudinary"

// export const Userregister = async (req, res) => {
//     const { user_id, username, phone, email, password, role } = req.body
//     if (!user_id || !username || !phone || !email || !role || !password) {
//         return res.json({ msg: "Plase fill all fields" })
//     }

//     try {
//         const userdata = await Usermodel.create({
//             "user_id": user_id,c
//             "username": username,
//             "email": email,
//             "phone": phone,
//             "password": password,
//             "role": role
//         })
//         res.status(200).json({
//             success: true,
//             msg: "user added",
//             data: userdata,

//         })
//     }
//     catch (e) {
//         res.send(e)
//     } 
// }
// }

export const Userregister = async (req, res) => {
console.log("this is file", req.file.path)

const imgurl = await Uploadoncloudinary(req.file.path)

    const user_id = "id" + Math.floor((Math.random()*1000000))
     const { username, phone, email, password, role } = req.body
    if (!user_id || !username || !phone || !email || !role || !password) {
        return res.json({ msg: "Plase fill all fields" })
    }

    try {
        const userdata = await Usermodel.create({
            "user_id": user_id, // aplyaya req.body madhun user_id ghaychi nhi te math random madhun genrate honar age
            "username": username,
            "email": email,
            "phone": phone,
            "password": password,
            "role": role,
            "img":imgurl
        })
        res.status(200).json({
            success: true,
            msg: "user added",
            data: userdata,

        })
    }
    catch (e) {
        res.send(e)
    }
}

export const UserLogin = async (req, res) => {
    const { email, password } = req.body
    if(!email || !password){
        return res.json({msg:"please fill credential"})
    }
    try {
        const userlogin = await Usermodel.findOne({ email: email, password: password })
        if (userlogin) {
            res.status(200).json({
                success: true,
                data: userlogin,
                msg: `${email} loged successfully`
            })
        }
        else {
            res.status(400).json({ message: 'Invalid email or password' });

        }
    }
    catch (e) {
        res.send(e)
    }

}

// export const Updateuser = async (req, res) => {
//     try {
        
//     const {id, username, phone, email, password, user_id, role } = req.body  //request body madhey he name use karayche astat
//         const updateuser = await Usermodel.updateOne({ _id: id }, {
//             $set: {
//                 user_id: user_id,
//                 username: username,
//                 phone: phone,
//                 email: email,
//                 password: password,
//                 role: role
//             }
//         })
//         res.json({
//             success: true,
//             data: updateuser,
//             msg: `${username} is updated`
//         })
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

export const Updateuser = async (req, res) => {
    console.log("this is file", req.file.path)

    const imgurl = await Uploadoncloudinary(req.file.path)

    const { username, phone, email, password, user_id, role } = req.body
    try {
        const updateuser = await Usermodel.updateOne({ user_id: user_id }, {
            $set: {
                username: username,
                email: email,
                phone: phone,
                password: password,
                role: role,
                img:imgurl
            }
        })
        res.json({
            success: true,
            data: updateuser,
            msg: `${updateuser.username} is updated`
        })
    }
    catch (e) {
        console.log(e)
    }
}


export const Getallusers = async (req, res) => {

    const alldata = await Usermodel.find()
    res.json({
        success: true,
        msg: "All user Fetched",
        data: alldata
    })
}


// export const Deleteemployee = async (req,res)=>{
//     const { id } =req.params
//     // const id =req.body
//     try{
//         const Deleteemp= await Usermodel.deleteOne({ _id: id })
//         res.json({
//             data:`${id}`,
//             data2:Deleteemp,
//             msg:"Employee removed succefully"
//         })
//     }
//     catch(e){
//         console.log(e)
//     }
// }


// http://localhost:5555/api/userroutes/deleteuser/:id
export const Deleteemployee = async (req,res)=>{
    const  {id} =req.params; //params main name datala hai wo yaha varible main dalneka
    // const id =req.body
    try{
        const user = await Usermodel.findById(id);
        if (!user) {
            return res.status(404).json({
                msg: "Fabric not found"
            });
        }
        console.log(user)

        const imageUrl = user.img;

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
        const deleteuser = await Usermodel.deleteOne({ _id: id });
        res.json({
            success:true,
            data: deleteuser,
            msg: "user deleted successfully"
        });
    }
    catch(e){
        console.log(e)
    }
}