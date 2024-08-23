import { Schema, model } from "mongoose";
const GallerySchema = new Schema({

    
    imgname: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        required: true

    },
    color: {
        type: String,
        required: true,
        unique: true
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