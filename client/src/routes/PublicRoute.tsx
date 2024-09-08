
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PublicRouteProps {
  children: React.ReactElement;  
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  // const token = localStorage.getItem('user');
  const token = true
  const location = useLocation();

  
  return token ? <Navigate to="/members" replace state={{ from: location }} /> : children;
};

export default PublicRoute;
