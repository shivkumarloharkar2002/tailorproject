import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    user_id:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ['employee', 'admin'],
        default: 'employee',
        required:true
    },
    img:{
        type:String
    }    

},
{
    timestamps:true
    
})

const Usermodel = model("User",UserSchema)
export default Usermodel