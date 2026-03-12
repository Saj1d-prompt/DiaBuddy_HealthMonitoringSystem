import React from 'react'
import UserList from './UserList';
import CreateDoctor from './CreateDoctor';
import AddHospital from './AddHospital';

const AdminDashboard = () => {
  return (
    <div>
      Test Admin
      <AddHospital />
      <CreateDoctor />
    </div>
  )
}

export default AdminDashboard
