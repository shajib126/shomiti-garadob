import axios from "axios"
export const createSpend = (whosIssueThis,spendType)=>async(dispatch)=>{
    try {
        dispatch({
            type:"createSpendRequest"
        })
        const {data} = await axios.post('/spend/create',{whosIssueThis,spendType},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"createSpendSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"createSpendFailure",
            payload:error.response.data.message
        })
    }
}