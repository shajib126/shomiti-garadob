import {createReducer} from '@reduxjs/toolkit'
const initialState = {}
export const depositeReducer = createReducer(initialState,{
   createDepositeRequest:(state)=>{
    state.loading = true
   },
   createDepositeSuccess:(state,action)=>{
    state.loading = false
    state.deposite = action.payload
   },
   createDepositeFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload
   },
   getAllDepositeRequest:(state)=>{
    state.loading = true
   },
   getAllDepositeSuccess:(state,action)=>{
    state.loading = false
    state.deposite = action.payload
   },
   getAllDepositeFailure:(state,action)=>{
    state.loading = false
    state.error = action.payload
   },
   getSingleDepositeRequest:(state)=>{
    state.loading = true
   },
   getSingleDepositeSuccess:(state,action)=>{
    state.loading = false
    state.deposite = action.payload
   },
   getSingleDepositeFailure:(state,action)=>{
    state.loading = false
    state.error = action.payload
   },
})