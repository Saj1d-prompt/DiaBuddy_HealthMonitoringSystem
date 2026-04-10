import React from 'react'
import CreateDoctor from './CreateDoctor';
import AddHospital from './AddHospital';
import AdminNavbar from './AdminNavbar';


const AdminDashboard = () => {
  return (
    <div>
      <div className="statGrid">
        <div className="statCard">
          <h3>Total Doctors</h3>
          <p>50</p>
        </div>
        <div className="statCard">
          <h3>Total Hospitals</h3>
          <p>20</p>
        </div>
        <div className="statCard">
          <h3>Total Patients</h3>
          <p>200</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
