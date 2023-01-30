import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./admin/admin";
import Login from "../src/login/login";
import {loginStart, loginSuccess, loginFailed} from "./redux/authSlice"

const appRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="loginAdmin" element={<Login />} />
      </Routes>
    </div>
  );
};

export default appRouter;
