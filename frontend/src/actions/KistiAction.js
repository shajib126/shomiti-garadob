import axios from 'axios'
export const payKisti = (id,payAmount)=>async(dispatch)=>{
    try {
        
        dispatch({
            type:"payKistiRequest"
        })
        const {data} = await axios.post(`/kisti/paykisti/${id}`,{payAmount},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"payKistiSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"payKistiFailure",
            payload:error.response.data.message
        })
    }
}
export const getAllKisti = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"getAllKistiRequest"
        })
        const {data} = await axios.get('/kisti')
        dispatch({
            type:"getAllKistiSuccess",
            payload:data.kistis
        })
    } catch (error) {
        dispatch({
            type:"getAllKistiFailure",
            payload:error.response.data.message
        })
    }
}

export const getSingleKisti = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:'getSingleKistiRequest'
        })
        const {data} = await axios.get(`/kisti/${id}`)
        dispatch({
            type:"getSingleKistiSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"getSingleKistiFailure",
            payload:error.response.data.message
        })
    }
}