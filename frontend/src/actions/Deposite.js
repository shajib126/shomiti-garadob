import  axios  from "axios"

export const createDeposite = (id,depositeAmount)=>async(dispatch)=>{
    try {
        dispatch({
            type:"createDepositeRequest"
        })
        const {data} = await axios.post(`/deposite/create/${id}`,{depositeAmount},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"createDepositeSuccess",
            payload:data
        })
    } catch (error) {
        
        dispatch({
            type:"createDepositeFailure",
            payload:error.response.data.message
        })
    }
}

export const totalDeposite = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"getAlldepositeRequest"
        })
        const {data} = await axios.get('/deposite/all')

        dispatch({
            type:"getAllDepositeSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"getAllDepositeFailure",
            payload:error.response.data.message
        })
    }
}