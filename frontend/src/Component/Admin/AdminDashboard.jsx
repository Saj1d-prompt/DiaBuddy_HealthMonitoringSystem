import React from 'react'
import CreateDoctor from './CreateDoctor';
import AddHospital from './AddHospital';
import AdminNavbar from './AdminNavbar';


const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      Test Admin
      <AddHospital />
      <CreateDoctor />
    </div>
  )
}

export default AdminDashboard
