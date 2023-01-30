import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const userReducer = createReducer(initialState,{
    RegisterRequest:(state)=>{
        state.loading = true
    },
    RegisterSuccess:(state,action)=>{
        state.loading = false
        state.user = action.payload
    },
    RegisterFailure:(state,action)=>{
        state.loading =false
        state.error = action.payload
    },
    AuthLoginRequest:(state)=>{
        state.loading = true;
        state.isAuthenticated = false
    },
    AuthLoginSuccess:(state,action)=>{
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
    },
    AuthLoginFailure:(state,action)=>{
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    }
})