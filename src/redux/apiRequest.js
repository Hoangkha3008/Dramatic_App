import axios from "axios";
import {loginStart, loginSuccess, loginFailed} from "./authSlice"
import { getUsersStart,getUsersSuccess,getUsersFailed } from "./UserSlice";
import Admin from "../admin/admin";

export const loginUser = async(user,dispatch,navigate) =>{
    dispatch(loginStart());
    try{
        const res =await axios.post("https://localhost:7036/api/Users/Login",user);
        dispatch(loginSuccess(res.data));
        navigate("/admin/dashboard");
        
    }catch(e){
        dispatch(loginFailed());
    }
}


export const getAllAdmin = async (accessToken,dispatch) => {
    dispatch(getUsersStart());
    try{
        const res = await axios.get("https://localhost:7036/api/Taikhoans",{
            headers: {
                accessToken: `Bearer ${accessToken}`,
            },
        });
        dispatch(getUsersSuccess(res.data));
    }
    catch(err){
        dispatch(getUsersFailed())
    }
}

