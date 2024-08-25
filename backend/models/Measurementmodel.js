import { Schema, model,mongoose } from "mongoose";


const MeasurementSchema = new Schema({
  category: {
    type: String,
    enum: ["shirt", "pant", "kurta", "payjama", "safari"],
    required: true, 
  },

//   size: [
//     {
      shirtcollar: {
        type: Number,
      },
      shirtheight: {
        type: Number,
      },
      shirtsleeve: {
        type: Number,
      },
      shirtchest: {
        type: Number,
      },
      shirtwaist: {
        type: Number,
      },
      shirtsholder: {
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
    // },

    // {
      kurtacollar: {
        type: Number,
      },
      kurtaheight: {
        type: Number,
      },
      kurtasleeve: {
        type: Number,
      },
      kurtachest: {
        type: Number,
      },
      kurtawaist: {
        type: Number,
      },
      kurtasholder: {
        type: Number,
      },
    // },

    // {
      payjamaheight: {
        type: Number,
      },
      payjamawaist: {
        type: Number,
      },
      payjamahibs: {
        type: Number,
      },
      payjamaabdomen: {
        type: Number,
      },
      payjamathigh: {
        type: Number,
      },
      payjamaknee: {
        type: Number,
      },
      payjamacalf: {
        type: Number,
      },
      payjamainstep: {
        type: Number,
      },
    // },

    // {
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
//     },
//   ],

  fabric_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fabric",
    required: true,
  },
  //   customer_id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Customer",
  //     required: true,
  //   },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Measurement = model("Measurement", MeasurementSchema);
export default Measurement;
