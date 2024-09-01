import ShilaiRate from "../models/Shilai_rate_model.js";


export const Shilai_rate_controller = async (req,res)=>{
const {cloth_type,rate}=req.body;
if(!cloth_type || !rate){
    return res.json("please fill clot type and rate")
}
try{
const shilaidata= await ShilaiRate.create(req.body)
res.json({
    success:true,
    data:shilaidata
})

}
catch(e){
    console.log(e)
}
}