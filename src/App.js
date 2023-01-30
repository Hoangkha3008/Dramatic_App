import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import FormAdministration from "./scenes/formAdministration";
import FormUser from "./scenes/formUser";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import Cast from "./scenes/cast";
import Director from "./scenes/director";
import Dramatic from "./scenes/dramatic";
import React, { useEffect, useState } from "react";
import HomePage from "../src/routes/Routers";
import Login from "../src/login/login";
import Admin from "./admin/admin";
import { loginStart, loginSuccess, loginFailed } from "./redux/authSlice";
// import Login from "./scenes/login/login";
import AppRouter from "./appRouter";
import authService from "./auth/auth.service";
import { FlareSharp } from "@mui/icons-material";


const AuthContext = React.createContext(null);


function App() {
  const [theme, colorMode] = useMode();
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   const user = authService.loginAdmin.data;
  //   console.log(user);
  // }, []);

  // const logOut = () => {
  //   authService.logoutAdmin();
  // };

  // this.state = {
  //     showAdminBoard:false,
  // }
  return (  
    <AuthContext.Provider value={token}>
      <AppRouter/>
      <Admin/>
  </AuthContext.Provider>
  );
}

export default App;
