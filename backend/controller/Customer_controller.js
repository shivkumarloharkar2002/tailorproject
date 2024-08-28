import Customer from "../models/customer_model.js"


export const Customerregister = async (req, res) => {
    const Customer_id = "customerid" + Math.floor((Math.random() * 1000000))
    const { name, order_id, phone, measurement_id, email, address, fabric_id } = req.body
    if (!name || !phone) {
      return  ("please fill name, and phonenumber")
    }

    try {
        const customerdata = await Customer.create({
            Customer_id, name, phone, address, email, measurement_id, order_id, fabric_id
    })
        res.json({
            success: true, msg: "customer added",
            data: customerdata
        })
    }
    catch (e) {
        console.log(e)
    }
}

// export const AllCustomerdata = async (req, res) => {
//     try {
//         const alldata =await Customer.find()
//         res.json({
//             success: true,
//             msg: "All customer Fetched",
//             data: alldata
//         })
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

export const AllCustomerdata = async (req, res) => {
    try {
        const alldata =await Customer.find().populate("measurement_id").populate("order_id")
        res.json({
            success: true,
            msg: "All customer Fetched",
            data: alldata
        })
    }
    catch (e) {
        console.log(e)
    }
}

export const Onecustomer = async (req,res)=>{
    const { id } = req.params;
    try{
        
        const OneD = await Customer.findOne({ _id: id })
        res.json({
            success: true,
            data: OneD,
            msg: `${id} id details`
        })
    }
    catch(e){
        console.log(e)
    }
}