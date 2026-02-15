import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const userInfo = localStorage.getItem('userInfo');
    if(!userInfo || !JSON.parse(userInfo).token) {
        return <Navigate to="/login" replace />;
    }
  return <Outlet />;
}

export default ProtectedRoute
