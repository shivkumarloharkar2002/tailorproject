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
    height: {
      type: Number,
    },
    waist: {
      type: Number,
    },
    hibs: {
      type: Number,
    },
    abdomen: {
      type: Number,
    },
    thigh: {
      type: Number,
    },
    knee: {
      type: Number,
    },
    calf: {
      type: Number,
    },
    instep: {
      type: Number,
    },
    // },

    // // {
    //   kurtacollar: {
    //     type: Number,
    //   },
    //   kurtaheight: {
    //     type: Number,
    //   },
    //   kurtasleeve: {
    //     type: Number,
    //   },
    //   kurtachest: {
    //     type: Number,
    //   },
    //   kurtawaist: {
    //     type: Number,
    //   },
    //   kurtasholder: {
    //     type: Number,
    //   },
    // // },

    // // {
    //   payjamaheight: {
    //     type: Number,
    //   },
    //   payjamawaist: {
    //     type: Number,
    //   },
    //   payjamahibs: {
    //     type: Number,
    //   },
    //   payjamaabdomen: {
    //     type: Number,
    //   },
    //   payjamathigh: {
    //     type: Number,
    //   },
    //   payjamaknee: {
    //     type: Number,
    //   },
    //   payjamacalf: {
    //     type: Number,
    //   },
    //   payjamainstep: {
    //     type: Number,
    //   },
    // // },

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

    //   fabric_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Fabric",
    //     required: true,
    //   },
    //   customer_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Customer",
    //     required: true,
    //   },
    //   user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    //   },
  },
  {
    timestamps: true,
  }
);

const Measurement = model("Measurement", MeasurementSchema);
export default Measurement;
