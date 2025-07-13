import React from "react";
import ResponsiveAppBar from "../common/ResponsiveAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../../features/landing/LandingPage";
import LoginPage from "../../features/auth/LoginPage";

export default function DashboardLayout() {
  const location = window.location.pathname;
  const isLoginPage = location === "/login";

  return (
    <>
      {!isLoginPage && <ResponsiveAppBar />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
