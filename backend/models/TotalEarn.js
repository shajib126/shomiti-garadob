const mongoose = require('mongoose')

const totalEarnSchema = mongoose.Schema({
    totalEarn:Number
},{timestamps:true})

const TotalEarn = mongoose.model("TotlaEarn",totalEarnSchema)
module.exports = TotalEarn