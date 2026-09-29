import "./nav-Style.scss"
 import{useNavigate} from 'react-router'
import { authUse } from '../feauter/auth/hooks/auth-hook'
const Nav = () => {
  const {handleLogOut,user}= authUse()
const navigate= useNavigate()

 async function handleNav(){
  await handleLogOut()
  navigate('/')
}
  return (
    <div className='nav'>
      <div className="icon">
        <h1 onClick={()=>{navigate('/')}}
        >Modify</h1>
      </div>


      <div className="auth">
      {user?
      (<><h3>{user.userName}</h3>
        <h3 onClick={handleNav}>LogOut</h3>
        </>)
       :
         (<>
        <h3 onClick={()=>{navigate('/register')}}
        >Register</h3>
        <h3 onClick={()=>{navigate('/login')}}
        >LogIn</h3>
        </>)
}
        
      </div>
    </div>
  )
}

export default Nav
