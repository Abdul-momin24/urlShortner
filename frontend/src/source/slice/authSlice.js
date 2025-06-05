import {createSlice } from "@reduxjs/toolkit";
// import { login } from "../slice";


const initialState = {
    user: null, 
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        loginUserr: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
   } })

   export const { setUser, logout, setLoading, loginUserr, cleanError } = authSlice.actions;


   export default authSlice.reducer;