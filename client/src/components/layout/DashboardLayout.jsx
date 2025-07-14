import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../common/ResponsiveAppBar";
import LandingPage from "../../features/landing/LandingPage";
import LoginPage from "../../features/auth/LoginPage";
import DashboardAdmin from "../../features/admin/pages/Dashboard";
import DashboardHte from "../../features/hte/pages/Dashboard";
import DashboardStudent from "../../features/student/pages/Dashboard";

export default function DashboardLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<DashboardAdmin />} />
        <Route path="/hte/*" element={<DashboardHte />} />
        <Route path="/student/*" element={<DashboardStudent />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
