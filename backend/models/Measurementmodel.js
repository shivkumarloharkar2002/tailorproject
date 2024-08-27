import { Schema, model, mongoose } from "mongoose";

const MeasurementSchema = new Schema(
  {
    category: {
      type: String,
      enum: ["shirt", "pant", "kurta", "payjama", "safari"],
      required: true,
    },

    //   size: [
    //     {
    collar: {
      type: Number,
    },
    height: {
      type: Number,
    },
    sleeve: {
      type: Number,
    },
    chest: {
      type: Number,
    },
    waist: {
      type: Number,
    },
    sholder: {
      type: Number,
    },
    // },

    // {
    pantheight: {
      type: Number,
    },
    pantwaist: {
      type: Number,
    },
    panthibs: {
      type: Number,
    },
    pantabdomen: {
      type: Number,
    },
    pantthigh: {
      type: Number,
    },
    pantknee: {
      type: Number,
    },
    pantcalf: {
      type: Number,
    },
    pantinstep: {
      type: Number,
    },

    safaricollar: {
      type: Number,
    },
    safarichest: {
      type: Number,
    },
    safarishirtwaist: {
      type: Number,
    },
    safarisleeve: {
      type: Number,
    },
    safarisholder: {
      type: Number,
    },
    safaritrouserwaist: {
      type: Number,
    },
    safaritrouserhip: {
      type: Number,
    },
    safaritrouserthigh: {
      type: Number,
    },

    fabric_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fabric",
     
    },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
  },
  {
    timestamps: true,
  }
);

const Measurement = model("Measurement", MeasurementSchema);
export default Measurement;
