import {ColorModeContext,useMode} from "../theme";
import {ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from "react-router-dom";
import Topbar from "../scenes/global/topbar";
import Sidebar from "../scenes/global/sidebar";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Invoices from "../scenes/invoices";
import Contacts from "../scenes/contacts";
import Bar from "../scenes/bar";
import FormAdministration from "../scenes/formAdministration";
import FormUser from "../scenes/formUser";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import Calendar from "../scenes/calendar";
import Cast from "../scenes/cast";
import Director from "../scenes/director";
import Dramatic from "../scenes/dramatic";
import Login from "../login/login"
import React, { useEffect, useState } from 'react';
import Routers from "../routes/Routers";
import AppRouter from "../appRouter";
// import Login from "./scenes/login/login";

const Admin = () => {
  const [theme,colorMode] = useMode ();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
              <Sidebar/>
              <main className="content">
                <Topbar/>
                <Routes>
                    <Route path="/admin/dashboard" element={<Dashboard/>}/>
                    <Route path="/admin/team" element={<Team/>}/>
                    <Route path="/admin/dramatic" element={<Dramatic/>}/>
                    <Route path="/admin/contacts" element={<Contacts/>}/>
                    <Route path="/admin/invoices" element={<Invoices/>}/>
                    <Route path="/admin/cast" element={<Cast/>}/>
                    <Route path="/admin/director" element={<Director/>}/>
                    <Route path="/admin/formAdministration" element={<FormAdministration/>}/>
                    <Route path="/admin/formUser" element={<FormUser/>}/>
                    <Route path="/admin/bar" element={<Bar/>}/>
                    <Route path="/admin/line" element={<Line/>}/>
                    <Route path="/admin/pie" element={<Pie/>}/>
                    <Route path="/admin/faq" element={<FAQ/>}/>
                    <Route path="/admin/geography" element={<Geography/>}/>
                    <Route path="/admin/calendar" element={<Calendar/>}/>
                </Routes>
              </main>
          </div>  
         
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Admin;
