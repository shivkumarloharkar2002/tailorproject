import ShilaiRate from "../models/Shilai_rate_model.js";


export const Addshilai_rate = async (req, res) => {
    const { cloth_type, rate } = req.body;
    if (!cloth_type || !rate) {
        return res.json("please fill clot type and rate")
    }
    try {
        const shilaidata = await ShilaiRate.create(req.body)
        res.json({
            success: true,
            data: shilaidata
        })
    }
    catch (e) {
        console.log(e)
    }
}

export const Shilai_rateUpdate = async (req, res) => {
    const { id, cloth_type, rate } = req.body;
    try {
      const  updatedata = await ShilaiRate.updateOne({ _id: id }, {
            $set: {
                "cloth_type": cloth_type,
                "rate": rate
            }
        })
        res.json({
            success: true,
            msg: `${cloth_type} is rate updted`,
            data: updatedata
        })
    }
    catch (e) {
        console.log(e)
    }
}


export const ShilaiRate_delte = async (req, res) => {
    const { id } = req.params
    try {
        const deletedata = await ShilaiRate.deleteOne({ _id: id })
        res.json({
            success: true,
            msg: "delted fabric",
            data: deletedata
        })
    }
    catch(e){
        console.log(e)
    }
}