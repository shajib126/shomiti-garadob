const Admin = require("../models/AdminAuth");
const cloudinary = require('cloudinary')

exports.authRegister = async (req, res) => {
  try {
    const { name, email, phone, password,avatar } = req.body;
    let user = await Admin.findOne({email});

    if (user) {
      res.status(409).json({
        success: false,
        message: "এই ইমেইল অথবা ফোন নাম্বার দিয়ে একাউন্ট খোলা আছে",
      });
    }
    switch (true) {
      case !name:
        return res
          .status(400)
          .json({ success: false, message: "নাম দিতে হবে!" });
      case !email:
        return res
          .status(400)
          .json({ success: false, message: "ইমেইল দিতে হবে!" });
      case !phone:
        return res
          .status(400)
          .json({ success: false, message: "ফোন নাম্বার দিতে হবে!" });
      case !password:
        return res
          .status(400)
          .json({ success: false, message: "পাসওয়ার্ড দিতে হবে!" });
    }
    const myCloud = await cloudinary.v2.uploader.upload(avatar,{
        folder:'gkss'
    })
    user = await Admin.create({name,email,phone,password,avatar:{
      public_id:myCloud.public_id,url:myCloud.secure_url
    }})
    res.status(201).json({
        success:true,
        user
    })

  } catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
  }
};

exports.authLogin = async(req,res)=>{
  try {
    const {email,phone,password} = req.body
    if(!email || !phone || !password){
      res.status(400).json({
        success:false,
        message:"ফিল্ড পুরন করুন"
      })
    }
    const user = await Admin.findOne({email,phone})
    if(!user){
      res.status(400).json({
        success:false,
        message:'রেজিস্টারড ইউজার না'
      })
    }
    const isPassword = user.matchPassword(password)
    if(!isPassword){
      res.status(400).json({
        success:false,
        message:"ভুল পাসওয়ার্ড!"
      })
    }
    const token = user.generateToken()
    const options = {expires:new Date(Date.now() + 90 * 24 * 60 *60 *1000),httpOnly:false}
    res.status(201).cookie("authToken",token,options).json({
      success:true,
      user,
      token
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}

exports.testAuth = async(req,res)=>{
  try {
    res.json({
      message:"authenticate user",
      user:req.user
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}