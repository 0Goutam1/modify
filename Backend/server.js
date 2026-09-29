require("dotenv").config()

const app = require('./src/app')
const connectToDb= require('./src/config/database')

 app.listen(8080,()=>{
    console.log("server is connect...")
})

connectToDb()