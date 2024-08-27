import mongoose from "mongoose"
import Order from "../models/Orde_model.js"
import Customer from "../models/customer_model.js"
import Usermodel from "../models/usermodel.js"

export const CreateOrder = async (req, res) => {
    // const order_id = "orderid" + Math.floor((Math.random() * 1000000))
    const Morder_id = new mongoose.Types.ObjectId()

    //    const transaction_id ="UTR24kwlewj"

    const { user_id, customer_id, measurement_id, cloth_type, status, quantity, actualprice, discount, cgst, cgstprice, sgst, sgstprice, transaction_id, total } = req.body
    try {
        const orderdata = await Order.create({"order_id":Morder_id, customer_id, user_id, customer_id,discount, measurement_id, cloth_type, status, quantity, actualprice, discount, cgst, cgstprice, sgst, sgstprice, transaction_id, total })

       const mongodbid= orderdata._id

        const customerhistory = await Customer.findByIdAndUpdate(req.body.customer_id,{ 
            $push:{
                measurement_id:req.body.measurement_id,
                order_id:req.body.order_id

            }},{
                new:true
            }
        )

        res.json({
            success: true,
            msg: "ordered",
            data: orderdata,
            data2: customerhistory
        })

    }
    catch(e){
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
            data: allorderdata._id
        })

    }
    catch (e) {
        console.log(e)
    }
}


