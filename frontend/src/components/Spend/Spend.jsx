import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createSpend } from '../../actions/SpendAction'
import cogotToast from 'cogo-toast'
import './Spend.css'
import SpendList from '../../Pages/SpendList/SpendList'

const Spend = () => {
    let spenderName,spenditemname,spendamount = useRef()
    const [spendType,setSpendType] = useState([])
    const [whosIssueThis,setWhosIssueThis] = useState("")
    const dispatch = useDispatch()
    const spendHandler = (e)=>{
        e.preventDefault()
        const spenderNameValue = spenderName.value;
        const spenditemnameValue = spenditemname.value;
        const spendamountValue = spendamount.value; 
        setSpendType([...spendType,{nameOfspend:spenditemnameValue,amount:spendamountValue}])
        setWhosIssueThis(spenderNameValue)
        
    }
    const addToSpend = e=>{
        dispatch(createSpend(whosIssueThis,spendType)).then(()=>{
            cogotToast.success("Added")
        })
    }
    const remove = item =>{
        const name = ['a','b','c']
        const fname = name.splice(2,1)
        console.log(name);
    }
  return (
    <div className='spend'>
        <form className='spend_form' onSubmit={spendHandler}>
            <label>ব্যয়কারীর নাম</label>
            <input ref={(input)=>spenderName = input} type="text"/>
            <label>কোন খাতে ব্যয় করেছেন?</label>
            <input ref={(input)=>spenditemname=input} type="text" />
            <label>কত টাকা ব্যয় করেছেন?</label>
            <input ref={(input)=>spendamount=input} type="number" />
            <button className='add'>সংযুক্ত করুন</button>
            <button className='save' onClick={addToSpend}>Save</button>
        </form>
       
        <div className="spendlists">
            <SpendList remove={remove} spendType={spendType} whosIssueThis={whosIssueThis}/>
        </div>
    </div>
  )
}

export default Spend