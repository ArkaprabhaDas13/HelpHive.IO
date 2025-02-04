import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        loginState:false,       // register page / login page. NOT Logged in or not!!!!!!
        loggedUser:"",
        logged:false
    },
    reducers:{
        switchState: (state)=>{
            // console.log("Switch state ran!")
            state.loginState = !state.loginState;
        },
        setLoggedUser: (state,action)=>{
            console.log("LOGGED user!")
            state.loggedUser = action.payload;
        },
        setLogin: (state)=>{
            state.logged = !state.logged;
        }
    }
})

export const {switchState, setLoggedUser, setLogin} = loginSlice.actions;
export default loginSlice.reducer;