import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './AdminDash.css'
import { getCustomers } from '../../actions/Customer'
import { totalDeposite } from '../../actions/Deposite'
import { earnTotal } from '../../actions/TotalEarn'
import axios from 'axios'

const AdminDash = () => {
    const dispatch = useDispatch()
    const {loading,error,customers} = useSelector((state)=>state.customer)
    const {deposite} = useSelector((state)=>state.deposite)
    const {loading:totalLoading,total} = useSelector((state)=>state.totalearn)
    useEffect(()=>{
        dispatch(getCustomers())
        // console.log(customers);
    },[dispatch])
    useEffect(()=>{
        dispatch(totalDeposite())
        console.log(deposite);
    },[dispatch])
    useEffect(()=>{
        dispatch(earnTotal())
       
    },[dispatch])
  return (
    <div className='admin'>
      
        <aside className="sidebar">
        <h1>Admin Dashboard</h1>
            <Link to='/new-customer'>নতুন কাস্টোমার</Link>
            <Link to='/customers'>সব কাস্টোমার</Link>
            <Link to='/deposite'>ডিপোজিট</Link>
            <Link to='/earn'>আয়</Link>
            <Link to='/spend'>ব্যয়</Link>    
            <Link to='/total-spend'>টোটাল ব্যয়</Link>

        </aside>
        <div className="right">
          <div className='totalCustomer'>
              <h1> Total Customer</h1>
              <h3>Total: {customers?.length}</h3>
          </div>
          <div className='totalEarn'>
              <h1> Total Earn</h1>
              <h3>Total: {JSON.parse(localStorage.getItem('total'))}টাকা</h3>
          </div>
          <div className='totalCustomer'>
              <h1> Total Spend</h1>
              <h3>Total: 450</h3>
          </div>
          <div className='totalCustomer'>
              <h1>Total Deposite</h1>
              <h3>Total: {deposite?.deposites?.length}</h3>
          </div>
          </div>
        
    </div>
  )
}

export default AdminDash