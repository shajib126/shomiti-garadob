const jwt = require('jsonwebtoken')
const Admin = require('../models/AdminAuth')

exports.isAuthenticated = async(req,res,next)=>{
    try {
        const {authToken} = req.cookies
       if(!authToken){
            return res.status(401).json({
                message:"লগিন করুন"
            })
       }
       const decoded = await jwt.verify(authToken,process.env.JWT_SECRET)
       req.user = await Admin.findById(decoded._id)
       
       next()
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

    
}

exports.isAdmin = async(req,res,next)=>{
        try {
            const admin = await Admin.findById(req.user._id)
            if(admin.role === 'admin'){
                next()
               
            }
            res.status(400).json({
                success:false,
                message:'আপনি এডমিন না!'
            })
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error.message
            })
        }
}