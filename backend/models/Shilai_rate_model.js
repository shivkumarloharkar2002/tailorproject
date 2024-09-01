import {Schema, model} from "mongoose"
const shilaiRateSchema = new Schema({
  cloth_type: {
    type: String,
    enum: ["shirt", "pant", "kurta", "payjama", "safari"],
    required: true
  },
  rate: {
    type: Number,
    required: true,
    min: 0
  }
},{
    timestamps:true
}
);


const ShilaiRate = model('ShilaiRate', shilaiRateSchema);

export default ShilaiRate;