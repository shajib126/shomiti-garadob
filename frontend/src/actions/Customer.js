import axios from "axios"
export const createCustomer = (name,nidCard,avatar,nid,phone,password,loanAmount,loanDuration,payType,payCount) =>async(dispatch)=>{
    try {
        dispatch({
            type:"CreateCustomerRequest"
        })
        const {data} = await axios.post('/customer/create-user',{name,nidCard,avatar,nid,phone,password,loanAmount,loanDuration,payType,payCount},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"CreateCustomerSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"CreateCustomerFailure",
            payload:error.resopnse.data.message
        })
    }
}

export const getCustomers = () =>async(dispatch)=>{
    try {
        dispatch({
            type:"GetCustomerRequest"
        })
        const {data} = await axios.get('/customer/customers')
        dispatch({
            type:"GetCustomerSuccess",
            payload:data.customers
        })
    } catch (error) {
        dispatch({
            type:"GetCustomerSuccess",
            payload:error.response.data.message
        })
    }
}