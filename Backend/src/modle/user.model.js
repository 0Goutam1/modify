const monogoose= require("mongoose")

const userSchema= new monogoose.Schema({
    userName:{
        type: String,
        require:[true,"username is required"],
    },
    email:{
        type:String,
        require:[true,"email is required"]

    },
    password:{
        type:String,
        require:[true,"password is required"],
        select: false
    }
},{
    timeStamp:true
})

const userModel=  monogoose.model("users",userSchema)

module.exports= userModel