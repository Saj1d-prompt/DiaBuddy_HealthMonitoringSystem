import React from 'react'
import style from '../../Style/AdminDashboard.module.css'
import { useState } from 'react';


const AdminDashboard = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    hospitals: 0,
    patients: 0
  });
  const fetchStats = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try{

    }catch(error){
      console.error("Error fetching stats:", error);
    }
  }
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
