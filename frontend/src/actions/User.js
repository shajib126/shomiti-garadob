import axios from 'axios'
export const register = (name,email,phone,avatar,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"RegisterRequest"
        })
        const {data} = await axios.post('/auth/register',{name,email,phone,avatar,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:'RegisterSuccess',
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:'RegisterFailure',
            payload:error.response.data.message
        })
    }
}

export const authLogin = (email,phone,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"AuthLoginRequest"
            
        })
        const {data} = await axios.post('/auth/login',{email,phone,password},{
           
            headers:{
                "Content-Type":"application/json"
            }
            
        })
        dispatch({
            type:"AuthLoginSuccess",
            payload:data.user
        })
        localStorage.setItem('authUser',JSON.stringify(data.user))
    } catch (error) {
        dispatch({
            type:"AuthLoginFailure",
            payload:error.response.data.message
        })        
    }
}