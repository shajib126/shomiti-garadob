const Spend = require("../models/Spend")

exports.createSpend = async(req,res)=>{
    try {
        const {whosIssueThis,spendType} = req.body
        console.log(req.body);
        if(!whosIssueThis && !spendType){
            res.status(400).json({
                success:false,
                message:"প্রত্যেক ফিল্ড পুরন করুন"
            })
        }
       
        const spend = await Spend.create(req.body)
        await spend.save()
        res.status(201).json({
            success:true,
            spend
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}