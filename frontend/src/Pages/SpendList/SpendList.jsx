import React from 'react'
import './SpendList.css'

const SpendList = ({spendType,whosIssueThis,remove}) => {
  return (
    <div className='spendList'>
        <table>
        <thead>
            <tr>
                <th>#ID</th>
                <th>ব্যয়কারীর নাম</th>
                <th>ব্যায়ের খাত</th>
                <th>ব্যায়ের পরিমান</th>
                <th>এডিট</th>
                <th>রিমুভ</th>
            </tr>
        </thead>
        {spendType.map((item,i)=>(
            <tr key={i}>
                <td>{i}</td>
                <td>{whosIssueThis}</td>
                <td>{item.nameOfspend}</td>
                <td>{item.amount}</td>   
                <td><button>edit</button></td> 
                <td><button onClick={()=>remove(item)}>remove</button></td>
            </tr>
        ))}
        </table>
    </div>
  )
}

export default SpendList