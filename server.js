const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const authRoute = require('./routes/adminRoutes')
const customerRoute = require('./routes/customerRoute')
const spendRoute = require('./routes/spendRoutes')
const kistiRoute = require('./routes/kistiRoutes')
const depostieRoute = require('./routes/depositeRoutes')
const totalEarnRoute = require('./routes/totalEarnRoutes')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cloudinary = require('cloudinary')
const app = express()


//
dotenv.config()
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use(cors())
app.use(cookieParser())

//route

app.use('/auth',authRoute)
app.use('/customer',customerRoute)
app.use('/spend',spendRoute)
app.use('/kisti',kistiRoute)
app.use('/deposite',depostieRoute)
app.use('/total',totalEarnRoute)
//cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})


app.use(express.static(path.join(__dirname,"./frontend/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
})

mongoose.set({strictQuery:false})
mongoose.connect(process.env.MONGO_URI).then(()=>console.log(`DB connected ${mongoose.connection.host}`)).catch((err)=>console.log(err))
const port = process.env.PORT || 8000
app.listen(port,()=>console.log(`server running in ${port}`))