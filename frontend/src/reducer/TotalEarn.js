import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const totalEarnReducer = createReducer(initialState,{
    totalEarnRequest:(state)=>{
        state.loading = true
    },
    totalEarnSuccess:(state,action)=>{
        state.loading = false
        state.total = action.payload
    },
    totalEarnFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    }
})