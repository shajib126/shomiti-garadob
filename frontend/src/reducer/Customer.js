import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const customerReducer = createReducer(initialState,{
    CreateCustomerRequest:(state)=>{
        state.loading = true
    },
    CreateCustomerSuccess:(state,action)=>{
        state.loading = false
        state.customer = action.payload
    },
    CreateCustomerFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    GetCustomerRequest:(state)=>{
        state.loading = true
    },
    GetCustomerSuccess:(state,action)=>{
        state.loading = false
        state.customers = action.payload
    },
    GetCustomerFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    }
})