
import Usermodel from "../models/usermodel.js"


export const Userregister = async (req, res) => {
    const { username, phone, email, password } = req.body
    if (!username || !phone || !email || !password) {
        return res.json({ msg: "Plase fill all fields" })
    }

    try {
        const userdata = await Usermodel.create({
            "username": username,
            "email": email,
            "phone": phone,
            "password": password
        })
        res.status(200).json({
            status: true,
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

export const Getallusers = async (req, res) => {

    const alldata = await Usermodel.find()
    res.json({
        status: true,
        msg: "All user Fetched",
        data: alldata
    })
}