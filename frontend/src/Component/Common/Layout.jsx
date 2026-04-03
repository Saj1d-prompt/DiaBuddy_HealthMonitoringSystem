import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Outlet />;
    }
    const userRole = user?.role;
  return (
    <div>
      
    </div>
  )
}

export default Layout
