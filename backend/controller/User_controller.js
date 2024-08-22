import Usermodel from "../models/usermodel.js"

export const Userregister = async (req, res) => {
    const { user_id, username, phone, email, password, role } = req.body
    if (!user_id || !username || !phone || !email || !role || !password) {
        return res.json({ msg: "Plase fill all fields" })
    }

    try {
        const userdata = await Usermodel.create({
            "user_id": user_id,
            "username": username,
            "email": email,
            "phone": phone,
            "password": password,
            "role": role
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
            res.json({ message: 'Invalid email or password' });

        }
    }
    catch (e) {
        res.send(e)
    }

}

export const Updateuser = async (req, res) => {
    try {
        
    const {id, username, phone, email, password, user_id, role } = req.body
        const updateuser = await Usermodel.updateOne({ _id: id }, {
            $set: {
                user_id: user_id,
                username: username,
                phone: phone,
                email: email,
                password: password,
                role: role
            }
        })
        res.json({
            success: true,
            data: updateuser,
            msg: `${username} is updated`
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

export const Deleteemployee = async (req,res)=>{
    const { id } =req.params
    // const id =req.body
    try{
        const Deleteemp= await Usermodel.deleteOne({ _id: id })
        res.json({
            data:`${id}`,
            data2:Deleteemp,
            msg:"Employee removed succefully"
        })
    }
    catch(e){
        console.log(e)
    }
}