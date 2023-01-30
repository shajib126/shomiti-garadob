const Customer = require("../models/Customer")
const cloudinary = require('cloudinary')

exports.createCustomer = async(req,res)=>{
    try {
        const {name,nidCard,avatar,nid,phone,password,loanAmount,loanDuration,payType,payCount} = req.body
        if(!name || !phone ||!password || !loanAmount ||!loanDuration ){
            res.status(400).json({
                success:false,
                message:"প্রত্যেকটা ফিল্ড পুরন করুন ।"
            })
        }
        if(password < 6){
            res.status(400).json({
                success:false,
                message:"পাসওয়ার্ড ছয় সংখ্যার সমান বা উপরে দিন।"
            })
        }
       
        const myCloud = await cloudinary.v2.uploader.upload(nidCard,{
            folder:"nidCards"
        })
        const myCloud2 = await cloudinary.v2.uploader.upload(avatar,{
            folder:"avatars"
        })
        const customer = await Customer.create({name,nidCard:{public_id:myCloud.public_id,url:myCloud.secure_url},avatar:{public_id:myCloud2.public_id,url:myCloud2.secure_url},nid,phone,password,loanAmount,loanDuration,payType,payCount})
        await customer.save()
        res.status(201).json({
            success:true,
            customer
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.customerLogin = async(req,res)=>{
    try {
        const {nid,password} = req.body;
        if(!nid || !password){
            res.status(400).json({
                success:false,
                message:"প্রত্যেক ফিল্ড পূরণ করুন"
            })
        }
        const customer = await Customer.findOne({nid})
        if(!customer){
            res.status(404).json({
                success:false,
                message:"ফোন এবং এনআইডি ভুল!"
            })
        }
        const isPassword = customer.matchPassword(password)
        if(!isPassword){
            res.status(400).json({
                success:false,
                message:'ভুল পাসওয়ার্ড'
            })
        }
        const token = customer.generateToken()
        const options = {expires:new Date(Date.now() + 90 * 24 * 60 *60 *1000),httpOnly:false}
        res.status(200).cookie('customerToken',token,options).json({
            success:true,
            customer
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getAllCustomer = async(req,res)=>{
    try {
        const customers = await Customer.find({}).select("-password")
        if(!customers){
            res.status(400).json({
                success:false,
                message:"কোনো কাস্টোমার খুজে পাওয়া যায়নি"
            })
        }
        res.status(200).json({
            success:true,
            customers
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}