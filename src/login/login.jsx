import React from "react";
import "./loginUI.css";
import Imglogin from "../dramatic/images/12.jfif";
import axios from "axios";
import { useState } from "react";
import { loginUser } from "../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Admin from "../admin/admin";
import { loginSuccess } from "../redux/authSlice";
import authService from "../auth/auth.service";
const Login = () => {
  const [tenTaiKhoan, setTenTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   await authService.loginAdmin(tenTaiKhoan,matKhau).then(() => {
    //       navigate("/admin/dashboard")

    //   },
    //   (err) => {
    //     console.log(err)
    //   }
    //   );
    // }
    // catch (e) {
    //   console.log(e)
    // }
    const admin = {
      tenTaiKhoan:tenTaiKhoan,
      matKhau:matKhau
    };
    loginUser(admin,dispatch,navigate)
  };

  return (
    <div>
      <div className="login">
        <div className="box">
          <div className="form">
            <h2>Sign In</h2>
            <div className="inputBox">
              <input
                type="text"
                required="required"
                value={tenTaiKhoan}
                onChange={(e) => setTenTaiKhoan(e.target.value)}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required="required"
                value={matKhau}
                onChange={(e) => setMatKhau(e.target.value)}
              />
              <span>Password</span>
              <i></i>
            </div>
            <input type="submit" value="Login" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
