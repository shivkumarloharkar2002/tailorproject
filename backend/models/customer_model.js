import mongoose, { Schema, model } from "mongoose";

const CustomerSchema = new Schema({
    Customer_id: {
        type: String, // id ghene
    },
    name: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },

    email: {
        type: String,

    },
    
      measurement_id:[{ type: Schema.Types.ObjectId, ref: 'Measurement' }],
    // measurement_id: [String],

      order_id:[{ type: Schema.Types.ObjectId, ref: 'Order' }],
    // order_id: [String],

    fabric_id: { type: mongoose.Schema.Types.ObjectId, ref: "Fabric" }, //check karnyasathi ghetl ahe

},
{
    timestamps:true
});

const Customer = model("Customer", CustomerSchema);
export default Customer;