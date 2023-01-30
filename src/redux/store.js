import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from "./authSlice"
import userReducer from "./UserSlice"


export default configureStore({
    reducer:{
        auth:authReducer,
        users:userReducer,
    }
})