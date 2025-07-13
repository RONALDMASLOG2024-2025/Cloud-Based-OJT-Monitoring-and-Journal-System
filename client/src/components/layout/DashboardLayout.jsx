import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ResponsiveAppBar from "../common/ResponsiveAppBar";
import LandingPage from "../../features/landing/LandingPage";
import LoginPage from "../../features/auth/LoginPage";

// Moved inside so we can use hooks like useLocation
function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <ResponsiveAppBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default function DashboardLayout() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
