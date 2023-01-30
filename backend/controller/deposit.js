const Customer = require("../models/Customer");
const Deposite = require("../models/Deposit");
const mongoose = require('mongoose')

exports.createDeposit = async(req,res)=>{
    const {id} = req.params;
    const {depositeAmount} = req.body
   const user = await Customer.findById(id)
  if(!user){
    res.status(404).json({
        success:false,
        message:"customer not found"
    })
  }
  const deposite = new Deposite({depositeAmount,depositeCustomer:user._id})
   await deposite.save()
   res.status(201).json({
    success:true,
    deposite
   })
    
}

exports.getAllDeposite = async(req,res)=>{
    try {
        const deposites = await Deposite.find({}).populate("depositeCustomer")
        if(!deposites){
            res.status(400).json({
                success:false,
                message:'কোনো ডিপোজিট নেই'
            })
        }
        res.status(200).json({
            success:true,
            deposites
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
exports.getDepositeByUserId = async(req,res)=>{
    try {
        const {id} = req.params
        const depositeByCustomerId = await Deposite.find({depositeCustomer:id}).populate("depositeCustomer")
        if(!depositeByCustomerId){
            res.status(404).json({
                success:false,
                message:"এই কাস্টোমার কোনো ডিপোজিট দেয়নি!"
            })
        }
        res.status(200).json({
            success:true,
            depositeByCustomerId
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}