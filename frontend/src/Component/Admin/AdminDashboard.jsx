import React from 'react'
import style from '../../Style/AdminDashboard.module.css'


const AdminDashboard = () => {
  const [stats, setStats] = React.useState({
    doctors: 0,
    hospitals: 0,
    patients: 0
  });
  return (
    <div className={style.container}>
      <div className={style.statGrid}>
        <div className={style.statCard}>
          <h3>Total Doctors</h3>
          <p>50</p>
        </div>
        <div className={style.statCard}>
          <h3>Total Hospitals</h3>
          <p>20</p>
        </div>
        <div className={style.statCard}>
          <h3>Total Patients</h3>
          <p>200</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
