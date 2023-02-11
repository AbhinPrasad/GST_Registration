import User from "../models/userModel.js"

export const initiatePayment = async (req,res)=>{
    console.log(req.body);
    res.send("helllo")
}