import { useSelector } from "react-redux";


export default function AuthHeader (){
    const userName = useSelector((state)=> state.auth.login.currentUser)
    if(userName && userName.data.accsessToken){
        return {"x-auth-token": userName.data.accsessToken}
    } else {
        return {};
    }
}