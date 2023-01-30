const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:['নাম দিন']
    },
    nidCard:{
        public_id:String,
        url:String
    },
    avatar:{
        public_id:String,
        url:String
    },
    nid:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    loanAmount:{
        type:Number,
        default:0,
        required:true
    },
    loanDuration:{
        type:String,
        default:0,
        required:true
    },
    pay:{
        type:Number,
        default:0,
        required:true
    },
    payType:{
        type:String,
        default:'weekly',
        required:true
    },
    payCount:{
        type:Number,
        default:0
    }
}) 

customerSchema.pre("save",async function(next){
    if(this.isModified("password")){
        return await bcrypt.hash(this.password,10)
    }
    next()
})
customerSchema.methods.generateToken = function(){
    return  jwt.sign({_id:this._id},process.env.JWT_SECRET)
}
customerSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
const Customer = mongoose.model('Customer',customerSchema)
module.exports = Customer