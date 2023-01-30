const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminRegisterSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
    },
    avatar:{
        public_id:String,
        url:String
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'পাসওয়ার্ড ছয় সংখ্যার উপরে হতে হবে'],

    },
    role:{
        type:String,
        default:'editor'
    }
    
    
},{timestamps:true})

adminRegisterSchema.pre("save",async function(next){
    if(this.isModified("password")){
        return await bcrypt.hash(this.password,10)
    }
    next()
})
adminRegisterSchema.methods.matchPassword =async function(password){
    return await bcrypt.compare(password,this.password)
}
adminRegisterSchema.methods.generateToken =  function(){
    return  jwt.sign({_id:this._id},process.env.JWT_SECRET)
}

const Admin = mongoose.model('Admin',adminRegisterSchema)
module.exports = Admin