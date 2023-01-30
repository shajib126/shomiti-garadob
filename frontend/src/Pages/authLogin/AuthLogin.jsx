import React, { useEffect } from 'react'
import './AuthLogin.css'
import Logo from '../../assets/logo.png'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { authLogin } from '../../actions/User'
import cogoToast from 'cogo-toast'
import { useNavigate } from 'react-router-dom'
const AuthLogin = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const {loading,error,user} = useSelector((state)=>state.user)
  const submitHandler = (e) =>{
    e.preventDefault()
    dispatch(authLogin(email,phone,password)).then(()=>{
        cogoToast.success("লগিন সম্পন্ন হয়েছে")
        console.log(user);
        navigate('/')
        
    })
  }
  useEffect(()=>{
    if(error){
      cogoToast.error('error')
    }
    
  },[error,dispatch])
  return (
    <form onSubmit={submitHandler} className='authlogin'>
      <h3>অথ লগিন</h3>
      <img src={Logo} alt="Logo" />
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='ইমেইল' />
      <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='ফোন' />
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='পাসওয়ার্ড' />
      <button type='submit'>অথলগিন</button>
    </form>
  )
}

export default AuthLogin