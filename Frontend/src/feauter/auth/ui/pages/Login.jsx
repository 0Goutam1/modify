import React, { useState } from 'react'
import "../style/from_style.scss"
import "../../../../shared/button.scss"
import { authUse } from '../../hooks/auth-hook'
import {useNavigate}from "react-router"
import { Link } from 'react-router'

const Login = () => {
const {handleLogin,loding}= authUse()

const nagivate = useNavigate()
const [userName, setuserName] = useState("")
const [password, setpassword] = useState("")

 async function handleSubmit(e) {
  e.preventDefault()
  await handleLogin({userName,password})
  nagivate('/')
}


  return (
    <main className="from_warrper">
      <div className="form-container">
         <form  onSubmit={handleSubmit}>
           <h2>Login</h2>
           <div className="form-group">
                <label htmlFor="userName"><h3>UserName</h3></label>
                <input type="text" placeholder='userName' name='userName' id='userName'  
                onChange={(e)=>{setuserName(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="password"><h3>Password</h3></label>
                <input type="password" placeholder='password' name='password' id='password'
                onChange={(e)=>{setpassword(e.target.value)}} />
            </div>
            <button type="submit">Login</button>


        </form>
        <p>Don't have an account? <Link to="/register" className="link">Register here</Link></p>
      </div>
       
    </main>
  )
}

export default Login
