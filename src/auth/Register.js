import React    ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {signUpUser} from '../redux/authSlice'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch=useDispatch()
    const handleClick=()=>{
        console.table(name,email,password)
        dispatch(signUpUser(name,email,password))
    }
  return (
    <div className='flex'>
    <h3>Register</h3>
    <label htmlFor=''>Name</label>
    <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
    <label htmlFor=''>Email</label>
    <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor=''>Password</label>
    <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button className='m-top' onClick={handleClick}>Register</button>
    </div>
  )
}

export default Register