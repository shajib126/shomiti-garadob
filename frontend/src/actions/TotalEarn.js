import axios from "axios"

export const earnTotal = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:'totalEarnRequest'
        })
        const data = await axios.get('/total/earn')
        dispatch({
            type:"totalEarnSuccess",
            payload:data.data
        })
        localStorage.setItem('total',data.data.total.totalEarn)
    } catch (error) {
        dispatch({
            type:"totalEarnFailure",
            payload:error.response.data.message
        })
    }
}