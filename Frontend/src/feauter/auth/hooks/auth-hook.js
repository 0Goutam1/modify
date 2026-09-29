import { useContext, useEffect } from "react"
import {AuthContext} from "../AuthContext"
import{login,register,logOut,getMe} from "../api/auth-api"
export const authUse = ()=>{
    const context= useContext(AuthContext)

    const {user,setuser,loading,setloading}= context


    async function handleLogin({userName,password}) {
        setloading(true)
        const data= await login({userName,password})
        setuser(data.user)
        setloading(false)   
    }
    async function handleRegister({userName,email,password}) {
        setloading(true)
        const data= await register({userName,email,password})
        setuser(data.user)
        setloading(false)
        
    }

    async function handleLogOut() {
        setloading(true)
        const data= await logOut()
        setuser(null)
        setloading(false)
        
    }

    async function handleGetMe() {
        setloading(true)
        const data= await getMe()
        setuser(data.user)
        setloading(false)
        
    }
    useEffect(()=>{
        handleGetMe()
    },[])


    return ({
        user,setuser,handleGetMe,handleLogOut,handleLogin,handleRegister
    }

    )
}