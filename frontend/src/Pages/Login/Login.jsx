import React from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'


const Login = () => {
  return (
    <form className='login'>
        <img src={Logo} alt="" />
        <input type="text" id='id' placeholder='আপনার আইডি নং'/>
       
        <input id='password' type="password" placeholder='পাসওয়ার্ড' />
        <button>লগিন</button>
    </form>
  )
}

export default Login