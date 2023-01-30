const Customer = require('../models/Customer');
const Kisti = require('../models/Paykisti');
exports.payKisti = async(req,res)=>{
    try {
        const {payAmount} = req.body
        console.log(payAmount);
        const {id} = req.params;
        const customer = await Customer.findById(id)
        if(!payAmount){
            res.status(400).json({
                success:false,
                message:"কিস্ত্রির এমাউন্ট দেন"
            })
        }
        if(!customer){
            res.status(400).json({
                success:false,
                message:'কোনো ইউজার খুজে পাওয়া যায়নি!'
            })
        }
        const kisti = new Kisti({payAmount,customer:customer._id})
        await kisti.save()
        res.status(201).json({
            success:true,
            kisti
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getAllKisti = async(req,res)=>{
    try {
        const kistis = await Kisti.find({})
        if(!kistis){
            res.status(400).json({
                success:false,
                message:"কোনো রেকোর্ড নেই!"
            })
        }
        res.status(200).json({
            success:true,
            kistis
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getSingleKisti = async(req,res)=>{
    const {id} = req.params
    try {
        const kistiCustomer = await Kisti.find({customer:id}).populate("customer")
        if(!kistiCustomer){
            res.status(400).json({
                success:false,
                message:"কোনো কিস্তি দেওয়া হয়নি"
            })
        }
        res.status(200).json({
            success:true,
            kistiCustomer
        })
    } catch (error) {
        
    }
}