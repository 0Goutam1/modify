import React, { useState } from 'react'
import { authUse } from '../../hooks/auth-hook'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import "../style/from_style.scss"
import "../../../../shared/button.scss"

const Register = () => {

    const {handleRegister,loading}= authUse()
    const navigate = useNavigate()
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister({userName,email,password})
    navigate('/')
}

  return (
   <main className='from_warrper'>
      <div className="form-container">
         <form  onSubmit={handleSubmit}>
           <h2 id='header'>Register</h2>
           <div className="form-group">
                <label htmlFor="userName"><h3>UserName</h3></label>
                <input type="text" placeholder='userName'  id='userName'  
                onChange={(e)=>{setuserName(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label htmlFor="email"><h3>Email</h3></label>
                <input type="text" placeholder='email'  id='email'  
                onChange={(e)=>{setemail(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label htmlFor="password"><h3>Password</h3></label>
                <input type="password" placeholder='password'  id='password'
                onChange={(e)=>{setpassword(e.target.value)}} />
            </div>
            <button type="submit">Register</button>


        </form>
        <p>Already have an account? <Link to="/login" className='link'>Login here</Link></p>
      </div>
       
    </main>
  )
}

export default Register
