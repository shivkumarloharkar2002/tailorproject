import mongoose, { Schema, model } from "mongoose";

const OrderSchema = new Schema({

  order_id:{type:String,
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
    enum: ["pending", "complete"],
    default: "pending", // default value
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
  cgst: {
    type: Number,
    // required: true,
  },
  cgstprice: {
    type: Number,
    required: true,
  },
  sgst: {
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