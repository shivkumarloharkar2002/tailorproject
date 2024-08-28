import mongoose, { Schema, model } from "mongoose";

const OrderSchema = new Schema({

  order_id:{type:Schema.Types.ObjectId,
  },

  user_id: {type:mongoose.Schema.Types.ObjectId, ref:"User" },

  customer_id: {type:mongoose.Schema.Types.ObjectId, ref:"Customer" },

  measurement_id:  {type:mongoose.Schema.Types.ObjectId, ref:"Measurement" },

  cloth_type: {
    type: String,
    enum: ["shirt", "pant", "kurta", "payjama", "safari"],
    required: true, // default value
  },

  status: {
    type: String,
    enum: ["pending","working", "complete"],
    default: "pending", // default value
  },
  fabric_price:{
    type: Number,
    required: true,
  },
  cloth_stich:{
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  actualprice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  discounted_price:{
    type: Number,
    required: true,
  },
  cgstRate: {
    type: Number,
    // required: true,
  },
  cgstprice: {
    type: Number,
    required: true,
  },
  sgstRate: {
    type: Number,
    required: true,
  },
  sgstprice: {
    type: Number,
    // required: true,
  },
  transaction_id:{
    type:String
  },
  total: {
    type: Number,
    required: true,
  }
},
{
  timestamps:true
}
);

const Order = model("Order", OrderSchema);
export default Order