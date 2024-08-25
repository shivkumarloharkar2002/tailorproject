import { Schema, model } from "mongoose";
const GallerySchema = new Schema({


    img:{
        type: String,
    },
    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
    },

    price: {
        type: Number,
        required: true

    },
    color: {
        type: String,
        // required: true,

    },
    cloth_type: {
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

}
)

const GalleryModel = model("Gallery", GallerySchema)
export default GalleryModel