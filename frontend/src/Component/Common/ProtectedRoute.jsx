import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const {user} = useContext(AuthContext);
    const userInfo = localStorage.getItem('userInfo');
    if(!userInfo || !userInfo.token) {
        return <Navigate to="/login" replace />;
    }
  return children;
}

export default ProtectedRoute
