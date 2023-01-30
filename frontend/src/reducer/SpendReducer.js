import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const spendReducer = createReducer(initialState,{
    createSpendRequest:(state)=>{
        state.loading = true
    },
    createSpendSuccess:(state,action)=>{
        state.loading = false
        state.spend = action.payload
    },
    createSpendFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    }
})