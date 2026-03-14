import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const isLoggedIn = localStorage.getItem("Name");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;