const mongoose = require('mongoose')
const depositeSchema = mongoose.Schema({
    depositeAmount:{
        type:Number,
        default:0,
        required:true
    },
    depositeCustomer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    date:{
        type:Date,
        default:new Date(Date.now())
    }
})


const Deposite = mongoose.model("Deposite",depositeSchema)
module.exports = Deposite