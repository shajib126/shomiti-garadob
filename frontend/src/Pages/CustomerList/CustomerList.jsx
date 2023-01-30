import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { createDeposite } from '../../actions/Deposite'
import cogoToast from 'cogo-toast'
import './CustomerList.css'

const CustomerList = ({customers,kistiHandler}) => {
    const [payAmount,setPayAmount] = useState(0)
    const [depositeAmount,setDepositeAmount] = useState(0)
    const dispatch = useDispatch()
    
    const depositeHandler = (id) =>{
        dispatch(createDeposite(id,depositeAmount)).then(()=>{
            cogoToast.success("ডিপোজিট দেওয়া হয়েছে")
            
        })
    }
  return (
    <>
    <table className='customer_table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>phone</th>
                <th>nid</th>
                <th>Pay</th>
                <th>ডিপোজিট</th>
                <th>Pay Type</th>
                <th>Details</th>
                <th>Edit</th>
            </tr>
        </thead>
        <thead>
            {customers?.map((customer,i)=>(
                <tr key={i}>
                    <td>#{i+1}</td>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.nid}</td>
                    <td>
                    <span className='tooltiptext'>কিস্তির এমাউন্ট দিন</span>
                        
                            <input type="text" onChange={(e)=>setPayAmount(e.target.value)}  />
                            <button onClick={()=>kistiHandler(customer._id,payAmount)} type='submit'>কিস্তি</button>
                        
                    </td>
                    <td>
                        <input type="number" onChange={(e)=>setDepositeAmount(e.target.value)} />
                        <button onClick={()=>depositeHandler(customer._id)}>ডিপোজিট</button>
                    </td>
                    <td>{customer.payType}</td>
                    <td><Link to={`/customer/${customer._id}`}>কিস্তি ডিটেইল</Link></td>
                    <td><button>Edit</button></td>
                </tr>
            ))}
        </thead>
    </table>
    
    </>
  )
}

export default CustomerList