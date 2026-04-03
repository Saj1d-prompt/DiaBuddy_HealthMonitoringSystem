import React from 'react'
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import AdminNavbar from '../Admin/AdminNavbar';
import DoctorNavbar from '../Doctor/DoctorNavbar';
import PatientNavbar from '../Patient/PatientNavbar';

const Layout = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Outlet />;
    }
    const userRole = user?.role;
    const renderNavbar = () => {
        if(userRole === 'admin') {
            return (<AdminNavbar />)
        }else if(userRole === 'doctor') {
            return (<DoctorNavbar />)
        }else if(userRole === 'patient') {
            return (<PatientNavbar />)
        }else {
            return null;
        }
    }
  return (
    <div>
      {renderNavbar()}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
