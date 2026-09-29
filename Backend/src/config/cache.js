const Redis = require("ioredis")
 
const redis = new Redis({
    host:process.env.Redis_Host,
    port:process.env.Redis_Port,
    password:process.env.Redis_Password
})
redis.on("connect",()=>{
    console.log("redis connected")
})
 redis.on("error",(error)=>{
    console.log(error)
 })
module.exports = redis
