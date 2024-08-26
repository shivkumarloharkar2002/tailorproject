import mongoose, { Schema, model } from "mongoose";
const NewGallerySchema = new Schema({
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

    price: {
        type: Number,
        required: true

    },
    Color: {
        type: String,
        required: true,

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


})

const NewGalleryModel =model ("NewGallery",NewGallerySchema)
export default NewGalleryModel