import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const kistiReducer = createReducer(initialState,{
    payKistiRequest:(state)=>{
        state.loading = true
    },
    payKistiSuccess:(state,action)=>{
        state.loading = false
        state.kisti = action.payload
    },
    payKistiFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    getAllKistiRequest:(state)=>{
        state.loading = true
    },
    getAllKistiSuccess:(state,action)=>{
        state.loading = false
        state.kistis = action.payload
    },
    getAllKistiFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    getSingleKistiRequest:(state)=>{
        state.loading = true
    },
    getSingleKistiSuccess:(state,action)=>{
        state.loading = false
        state.kisti = action.payload
    },
    getSingleKistiFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
    }

})