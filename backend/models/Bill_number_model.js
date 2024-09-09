import { Schema, model } from "mongoose";


const billNumberSchema = new Schema({
    currentBillNumber: {
        type: Number,
        required: true
    }
});

const BillNumber = model ('BillNumber', billNumberSchema);

export default BillNumber