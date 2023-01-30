import React from 'react'
import './AllCustomer.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers } from '../../actions/Customer'
import CustomerList from '../../Pages/CustomerList/CustomerList'
import { useState } from 'react'
import { payKisti } from '../../actions/KistiAction'
import cogoToast from 'cogo-toast'


const AllCustomer = () => {
    
    const dispatch = useDispatch()
    const {loading,error,customers} = useSelector((state)=>state.customer)
  
   const kistiHandler = (id,payAmount)=>{
      
      dispatch(payKisti(id,payAmount)).then(()=>{
        cogoToast.success('কিস্তি দেওয়া হয়েছে')
      })
   }
    
    useEffect(()=>{
        dispatch(getCustomers())
        
    },[dispatch])
  return (
    <div className="allCustomer">
        <h1>কাস্টোমার লিস্ট</h1>
        <CustomerList kistiHandler={kistiHandler} customers={customers} />
    </div>
  )
}

export default AllCustomer