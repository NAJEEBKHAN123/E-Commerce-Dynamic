import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  console.log('PrivateRoute state:', { isAuthenticated, role, roles });

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};



export default PrivateRoute;
