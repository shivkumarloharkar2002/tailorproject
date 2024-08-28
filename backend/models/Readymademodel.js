import {Schema , model} from "mongoose";


const ReadymadeSchema = new Schema(
    {
        img:{
            type:String,
        },
        title:{
            type:String,
            required: true
        },
        des:{
            type:String,
        },
        price:{
            type:Number,
            required:true
        },
        color:{
            type:String,
            required: true
        },
        cloth_type:{
            type: String,
            enum: ["shirt", "pant", "kurta", "pyjama", "safari"],
            required: true
        },
        pattern: {
            type: String,
            enum: ['solid', 'checks', 'strips', 'prints'],
            required: true
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L', 'XL', 'XXL'],
            required: true
        },
        offer:{
            type:String,
        }
    }
)


const Readymade = model("Readymade" , ReadymadeSchema)
export default Readymade