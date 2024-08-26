import { Schema, model } from "mongoose";


const FabricSchema = new Schema({
    fabric_id:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    cloth_type:{
        type:String,
        enum: ['shirt', 'pant','kurta',"payjama","safari"],
        required:true
    },
    fabric_type:{
        type:String,
        required:true
    },
    pattern:{
        type:String,
        enum: ['solid', 'checks','strips',"prints"],
        required:true
    },
    img1:{
        type:String,
        // required:true
    } 
},{
    timestamps:true
})

const Fabricmodel = model("Fabric",FabricSchema)
export default Fabricmodel