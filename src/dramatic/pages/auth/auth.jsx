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
                  <Components.Title>T???o t??i kho???n</Components.Title>
                  <Components.Input type='text' placeholder='T??n t??i kho???n' onChange={(e) => handleNameChange(e.target.value)}/>
                  <Components.Input type='password' placeholder='M???t kh???u' onChange={(e) => handlePassChange(e.target.value)}/>
                  <Components.Input type='password' placeholder='Nh???p l???i m???t kh???u' onChange={(e) => handlecfPassChange(e.target.value)}/>
                  <Components.Input type='email' placeholder='Email'onChange={(e) => handleEmailChange(e.target.value)} />
                  <Components.Input type='phone' placeholder='S??? ??i???n tho???i' onChange={(e) => handlePhoneChange(e.target.value)}/>
                  <Components.Input type='text' placeholder='Lo???i t??i kho???n' onChange={(e) => handleAcountChange(e.target.value)}/>
                  <Components.Button onClick={() => SignUp()}>????ng k??</Components.Button>
              </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
               <Components.Form>
                   <Components.Title>????ng nh???p</Components.Title>
                   <Components.Input type='text' placeholder='T??n t??i kho???n' onChange={(e) => handleNameChange(e.target.value)} />
                   <Components.Input type='password' placeholder='Password' onChange={(e) => handlePassChange(e.target.value)} />
                   <Components.Anchor href='#'>Qu??n m???t kh???u</Components.Anchor>
                   <Components.Button onClick={() => loginAdmin()}>????ng nh???p</Components.Button>
               </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Ch??o m???ng tr??? l???i!</Components.Title>
                  <Components.Paragraph>
                    ????? gi??? k???t n???i vui l??ng nh???p th??ng tin c???a b???n
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                      ????ng nh???p
                  </Components.GhostButton>
                  </Components.LeftOverlayPanel>

                  <Components.RightOverlayPanel signinIn={signIn}>
                    <Components.Title>Xin ch??o, B???n!</Components.Title>
                    <Components.Paragraph>
                        Nh???p th??ng tin c?? nh??n
                    </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            ????ng k??
                        </Components.GhostButton> 
                  </Components.RightOverlayPanel>
              </Components.Overlay>
          </Components.OverlayContainer>

      </Components.Container>
      </div>
  );
}

export default Auth