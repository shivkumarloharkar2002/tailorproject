
import Usermodel from "../models/usermodel.js"


export const Userregister = async (req, res) => {
    const { username, phone, email, password,role } = req.body
    if (!username || !phone || !email || !role || !password) {
        return res.json({ msg: "Plase fill all fields" })
    }

    try {
        const userdata = await Usermodel.create({
            "username": username,
            "email": email,
            "phone": phone,
            "password": password,
            "role":role
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

export const Updateuser = async (req,res) => {
    const { username, phone, email, password, id} = req.body
    try {
        const updateuser = await Usermodel.updateOne({ _id: id }, {
            $set: {
                username: username,
                phone: phone,
                email: email,
                password:password
            }
        })
        res.json({
            success:true,
            data:updateuser,
            msg:`${username} is updated`
        })
    }
    catch(e){

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