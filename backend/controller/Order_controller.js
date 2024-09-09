import mongoose from "mongoose"
import Order from "../models/Orde_model.js"
import Customer from "../models/customer_model.js"
import Usermodel from "../models/usermodel.js"
import BillNumber from "../models/Bill_number_model.js"

export const CreateOrder = async (req, res) => {
    // const order_id = "orderid" + Math.floor((Math.random() * 1000000))
    const Morder_id = new mongoose.Types.ObjectId()

    const transaction_id = "UTR24kwlewj"

    let billNumberDoc = await BillNumber.findOne();
    if (!billNumberDoc) {
        billNumberDoc = new BillNumber({ currentBillNumber: 1 });
    } else {
        billNumberDoc.currentBillNumber += 1;
    }
    await billNumberDoc.save();

    const bill_Number = billNumberDoc.currentBillNumber

    const {  customer_id, user_id, discount, measurement_id, cloth_type, status, fabric_price, cloth_stich, quantity, actualprice, discounted_price, cgstRate, cgstprice, sgstRate, sgstprice, total, targetDate,fabric_size } = req.body
    try {
        const orderdata = await Order.create({billNumber: bill_Number, "order_id": Morder_id, customer_id, user_id, discount, measurement_id, cloth_type, status, fabric_price, cloth_stich, quantity, actualprice, discounted_price, discounted_price, cgstRate, cgstprice, sgstRate, sgstprice, transaction_id, total, targetDate,fabric_size })

        // const mongodbid = orderdata._id
        console.log(orderdata)
        const customerhistory = await Customer.findByIdAndUpdate(req.body.customer_id, {
            $push: {
                measurement_id: req.body.measurement_id,
                order_id: orderdata._id

            }
        }, {
            new: true
        }
        )

        res.json({
            success: true,
            msg: "ordered",
            data: orderdata,
            data2: customerhistory
        })

    }
    catch (e) {
        res.send(e)
    }
}

export const Getorderdata = async (req, res) => {
    try {
        const allorderdata = await Order.find()
            .populate("user_id")
            .populate("customer_id")
            .populate("measurement_id")
        res.json({
            success: true,
            msg: "order fetched",
            data: allorderdata
        })

    }
    catch (e) {
        console.log(e)
    }
}


export const Updateorder = async (req, res) => {
    const { id, status, title, color, price, cloth_type, fabric_type, pattern } = req.body

    try {
        const updateorder = await Order.updateOne({ _id: id }, {
            $set: {
                "status": status
            }
        })
        res.json({
            success: true,
            data: updateorder,
            msg: `order status "${status}" is updated`
        })
    }
    catch (e) {
        console.log(e)
    }

}

export const Deleteorder = async (req, res) => {
    try {
        const { id } = req.params;
        const orderdelete = await Order.deleteOne({ _id: id })
        res.json({
            sucess: true,
            data: `${id},`,
            data2: orderdelete,
            msg: "Car deleted Successfully"
        })
    }
    catch (e) {
        console.log("Delete", e)
    }
}
