import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser:null,
            isFetching:false,
            error:false,
        }
    },
    reducers:{
        loginStart:(state) => {
            state.login.isFetching = true;
        },
        loginSuccess:(state,action) => {
            localStorage.setItem('token', state.accessToken);
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed:(state) => {
            state.login.isFetching = false;
            state.login.error = true;
        }

    }
})


export const {
    loginStart,
    loginSuccess,
    loginFailed
} = authSlice.actions


export default authSlice.reducer;
