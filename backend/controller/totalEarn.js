const Deposite = require("../models/Deposit")
const Kisti = require("../models/Paykisti")
const TotalEarn = require("../models/TotalEarn")

exports.totalEarn = async(req,res)=>{
    try {
        const kisti = await Kisti.find({},"payAmount")
       
        const totalKisti = kisti.reduce((acc,curr)=>{
            return acc + curr.payAmount
        },0)
        const deposite = await Deposite.find({},"depositeAmount")
        const totalDeposite = deposite.reduce((acc,curr)=>{
            return acc + curr.depositeAmount
        },0)
        const totalEarn = totalKisti + totalDeposite
        const total = await TotalEarn.create({totalEarn})
        await total.save()
        res.status(200).json({
            success:true,
            total
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}