import React    ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {signInUser, logout} from '../redux/authSlice'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch=useDispatch()
  const handleLogin=()=>{
      console.table(email,password)
      dispatch(signInUser(email,password))
  }
  const handleLogout=()=>{
    console.table(email,password)
    dispatch(logout)
}

  return (
    <div className='flex'>
    <h3>Login</h3>
    <label htmlFor=''>Email</label>
    <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor=''>Password</label>
    <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button className='m-top' onClick={handleLogin}>Login</button>
    <button className='m-top' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Login