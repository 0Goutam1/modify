const cookie = require("cookie-parser")
const userModel= require("../modle/user.model")
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
const redis= require("../config/cache")

 async function registerController (req,res){
const {userName,email,password}= req.body

const userExist= await userModel.findOne({
    $or:[
        {
            userName
        },{
            email
        }
    ]
})

if(userExist){
    return res.status(409).json({
        message:"user already exist"
    })
}




const hash= await bcrypt.hash(password,10)


const user= await userModel.create({
userName,email,password:hash
})

const token= await jwt.sign({
    userId: user._id
},process.env.jwtSecrty,{
    expiresIn: '7d'
})
res.cookie('token',token)

res.status(201).json({
    message:"user is created sucessfully",
    user,
   
})

}

 async function loginController (req,res)  {
    const {userName,email,password}= req.body


 const user= await userModel.findOne({
    $or:[
        {userName},
        {email}
    ],
 }).select("+password")


 if(!user){

    return res.status(404).json({
        message: "Invalid credential"
    })
 }

 const isPassword= await bcrypt.compare(password,user.password)
 if(!isPassword){
    return res.status(404).json({
        message:"Invalid credential"
    })
 }

 const token = await jwt.sign({
    userId: user._id
 },process.env.jwtSecrty,{
    expiresIn:"7d"
 })

 res.cookie("token",token)

 res.status(200).json({
    message:"login successfully",
    user
 })
    
}

 async function logoutController (req,res) {
    const token = req.cookies.token
     
    res.clearCookie("token")
  
 redis.set(token,Date.now().toString(),"EX",60*60)

    res.status(200).json({
        message:"logOut sucessfully"
    })
    
}


async function getMeController(req,res) {
    const user= req.user
    console.log(user)
    const respose= await userModel.findOne(user)


    res.status(200).json({
        message:"data feacth successfully",
        respose
    })
    
}

module.exports = {
     registerController,
    loginController,
    logoutController,
    getMeController
}