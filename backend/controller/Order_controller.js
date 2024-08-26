import Order from "../models/Orde_model.js"

export const CreateOrder = async (req, res) => {
    const Customer_id = "orderid" + Math.floor((Math.random() * 1000000))

    //    const transaction_id ="UTR24kwlewj"

    const { user_id, customer_id, measurement_id, cloth_type, status, quantity, actualprice, discount, cgst, cgstprice, sgst, sgstprice, transaction_id, total } = req.body
    try {
        const orderdata = await Order.create({ Customer_id, user_id, customer_id,discount, measurement_id, cloth_type, status, quantity, actualprice, discount, cgst, cgstprice, sgst, sgstprice, transaction_id, total })
        res.json({
            success: true,
            msg: "ordered",
            data: orderdata
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
            data: allorderdata
        })

    }
    catch (e) {
        console.log(e)
    }
}
