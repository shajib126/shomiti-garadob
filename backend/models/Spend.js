const mongoose = require('mongoose')

const spendSchema = mongoose.Schema({
    whosIssueThis:{
        type:String,
        required:[true,'ইস্যুকারির নাম দিন']
    },
    spendType:[
        {
            nameOfspend:{
                type:String,
                required:[true,'কোন খাতে খরচ হয়েছে?']
            },
            amount:{
                type:Number,
                required:[true,'কত টাকা খরচ হয়েছে?']
            },
            date:{
                type:Date,
                default:new Date(Date.now())
            }
        }
    ]
})

const Spend = mongoose.model('spend',spendSchema)
module.exports = Spend