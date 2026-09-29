const express = require("express")
const cookie = require("cookie-parser")
const app= express()
const cors= require("cors")
app.use(express.json())
app.use(cookie())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

const authRoutes= require("./router/auth.router")
const songRouter= require("./router/song.router")


app.use('/api/auth',authRoutes)
app.use('/api/song',songRouter)



module.exports = app