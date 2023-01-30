import React from 'react'
import './CreateCustomer.css'
import cogoToast from 'cogo-toast'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCustomer } from '../../actions/Customer'
import { useNavigate } from 'react-router-dom'

const CreateCustomer = () => {
  const [name,setName] = useState('')
  const [nidCard,setNidCard] = useState('')
  const [avatar,setAvatar] = useState('')
  const [nid,setNid] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [loanAmount,setLoanAmount] = useState("")
  const [loanDuration,setLoanDuration] = useState("")
  const [payType,setPayType] = useState("")
  const [payCount,setPayCount] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const nidCardHandler = e =>{
    const file = e.target.files[0]
    const Reader = new FileReader()
    Reader.readAsDataURL(file)
    Reader.onload = ()=>{
      if(Reader.readyState === 2){
        setNidCard(Reader.result);
      }
    }
  }
  const avatarHandler = e =>{
    const file = e.target.files[0]
    const Reader = new FileReader()
    Reader.readAsDataURL(file)
    Reader.onload = () =>{
      if(Reader.readyState === 2){
        setAvatar(Reader.result)
      }
    }  
  }
  const submitHandler = e =>{
    e.preventDefault()
    dispatch(createCustomer(name,nidCard,avatar,nid,phone,password,loanAmount,loanDuration,payType,payCount)).then(()=>{
      cogoToast.success("Successfully created")
    }).then(()=>{
      navigate('/customers')
    })
    
  }

  return (
    <div className='create-customer'>
      <form onSubmit={submitHandler}>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='name' />
        <input onChange={(e)=>setNid(e.target.value)} type="text" placeholder='nid' />
        <input onChange={(e)=>setLoanAmount(e.target.value)} type="text" placeholder='loanAmount' />
        <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Phone number' />
        <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password' />
        <input onChange={(e)=>setLoanDuration(e.target.value)} type="text" placeholder='Loan Duration' />
        <input onChange={(e)=>setPayType(e.target.value)} type="text" placeholder='Pay type' />
        <input onChange={(e)=>setPayCount(e.target.value)} type="number" placeholder='Pay count' />
        <label>এন আইডি কার্ড</label>
        <input onChange={nidCardHandler} type="file" accept='image/*' />
        <label>কাস্টোমারের পাসপোর্ট সাইজ ছবি</label>
        <input onChange={avatarHandler} type="file" accept='image/*' />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateCustomer