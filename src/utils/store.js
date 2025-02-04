import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../utils/loginSlice'
import groupReducer from "./groupSlice";

export default configureStore({
    reducer:{
        login:loginReducer,
        groups:groupReducer
    }
})