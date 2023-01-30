import axios from "axios"

const loginAdmin = (tenTaiKhoan, matKhau) => {
    return axios
        .post("https://localhost:7036/api/Users/Login",{
        tenTaiKhoan,
        matKhau,
    })
    .then((res) =>{
        if(res.data.accsessToken){
            localStorage.setItem("user".JSON.stringify(res.data))
        }
        return res.data
        
    })
}

const logoutAdmin = ()  => {
    localStorage.removeItem("user");
}

const getCurrentAdmin = () => {
return JSON.parse(localStorage.getItem("user"));
}

const authService = {
    loginAdmin,
    logoutAdmin,
    getCurrentAdmin,
};


export default authService;
