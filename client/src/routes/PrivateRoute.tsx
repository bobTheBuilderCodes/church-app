import React from "react";


import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // const token = localStorage.getItem('user');
  const token = "4949434";
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
