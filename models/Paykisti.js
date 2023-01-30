const mongoose = require('mongoose')

const payKistiSchema = mongoose.Schema({
    payAmount:{
        type:Number,
        default:0,
        required:true
    },
    date:{
        type:Date,
        default:new Date(Date.now())
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }

})

const Kisti = mongoose.model('Kisti',payKistiSchema)
module.exports = Kisti