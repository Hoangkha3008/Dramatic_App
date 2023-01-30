import React from 'react'
import * as Components from './Components';
import "./auth.css"
import { useState } from 'react';
import axios from "axios";



const Auth = () => {
    const [signIn, toggle] = useState(true);
    const [loginStatus, setLoginStatus] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [cfpassword, setCfPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [lacount, setLacount] = useState("")
    const [id, setId] = useState("")



    const handleNameChange = (value) => {
        setUsername(value);
    }

    const handlePassChange = (value) => {
        setPassword(value);
    }
    const handlecfPassChange = (value) => {
        setCfPassword(value);
    }
    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handlePhoneChange = (value) => {
        setPhone(value);
    }
    const handleAcountChange = (value) => {
        setLacount(value);
    }

    const SignUp = () => {
        const data = {
            id: id,
            username: username,
            password: password,
            cfpassword: cfpassword,
            email: email,
            phone: phone,
            lacount: lacount,
        }
        const url = 'https://localhost:7036/api/Taikhoans/SignUp';
        axios.post(url,data).then((result) =>  {
            alert(result.data)
        }).catch((error) => {
            alert(error)
        })
        
    }


    const loginAdmin = () => {
        axios.post("https://localhost:7036/api/Users/Login", {
            username: username,
            password: password,
        }).then((response) => {
            if(!response.data.message){
                setLoginStatus(response.data.message);
            } else {
                console.log(response.data);
                setLoginStatus(response.data[0].message);
            } 
        })
    }


  return(
    <div className='auth'>
      <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                  <Components.Title>Tạo tài khoản</Components.Title>
                  <Components.Input type='text' placeholder='Tên tài khoản' onChange={(e) => handleNameChange(e.target.value)}/>
                  <Components.Input type='password' placeholder='Mật khẩu' onChange={(e) => handlePassChange(e.target.value)}/>
                  <Components.Input type='password' placeholder='Nhập lại mật khẩu' onChange={(e) => handlecfPassChange(e.target.value)}/>
                  <Components.Input type='email' placeholder='Email'onChange={(e) => handleEmailChange(e.target.value)} />
                  <Components.Input type='phone' placeholder='Số điện thoại' onChange={(e) => handlePhoneChange(e.target.value)}/>
                  <Components.Input type='text' placeholder='Loại tài khoản' onChange={(e) => handleAcountChange(e.target.value)}/>
                  <Components.Button onClick={() => SignUp()}>Đăng ký</Components.Button>
              </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
               <Components.Form>
                   <Components.Title>Đăng nhập</Components.Title>
                   <Components.Input type='text' placeholder='Tên tài khoản' onChange={(e) => handleNameChange(e.target.value)} />
                   <Components.Input type='password' placeholder='Password' onChange={(e) => handlePassChange(e.target.value)} />
                   <Components.Anchor href='#'>Quên mất khẩu</Components.Anchor>
                   <Components.Button onClick={() => loginAdmin()}>Đăng nhập</Components.Button>
               </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Chào mừng trở lại!</Components.Title>
                  <Components.Paragraph>
                    Để giữ kết nối vui lòng nhập thông tin của bạn
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                      Đăng nhập
                  </Components.GhostButton>
                  </Components.LeftOverlayPanel>

                  <Components.RightOverlayPanel signinIn={signIn}>
                    <Components.Title>Xin chào, Bạn!</Components.Title>
                    <Components.Paragraph>
                        Nhập thông tin cá nhân
                    </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Đăng kí
                        </Components.GhostButton> 
                  </Components.RightOverlayPanel>
              </Components.Overlay>
          </Components.OverlayContainer>

      </Components.Container>
      </div>
  );
}

export default Auth