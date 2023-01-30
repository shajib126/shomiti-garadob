import React, { useEffect } from 'react'
import axios from 'axios'

const Test = () => {

    useEffect(()=>{
        axios.get('https://garadobshomiti.onrender.com/deposite/all').then((res)=>{
            console.log(res.data);
        })
    },[])
  return (
    <div>Test</div>
  )
}

export default Test