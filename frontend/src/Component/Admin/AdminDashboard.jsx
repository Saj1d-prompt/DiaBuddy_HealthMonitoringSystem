import React, { use, useEffect } from 'react'
import style from '../../Style/AdminDashboard.module.css'
import { useState } from 'react';


const AdminDashboard = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    hospitals: 0,
    patients: 0
  });
  const [recentUsers, setRecentUsers] = useState();
  const fetchStats = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try{
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/admin/getStatCount`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        setStats({
          doctors: result.data.doctorNumber,
          hospitals: result.data.hospitalNumber,
          patients: result.data.patientNumber
        });
      }
    }catch(error){
      console.error("Error fetching stats:", error);
    }
  }
  const fetchRecentUsers = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/admin/getRecentPatients`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        setRecentUsers(result.data);
      }
    }catch(error){
      console.error("Error fetching recent users:", error);
    }
  }
  
  useEffect(() => {
    fetchStats();
    fetchRecentUsers();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.statGrid}>
        <div className={style.statCard}>
          <h3>Total Doctors</h3>
          <p>{stats.doctors}</p>
        </div>
        <div className={style.statCard}>
          <h3>Total Hospitals</h3>
          <p>{stats.hospitals}</p>
        </div>
        <div className={style.statCard}>
          <h3>Total Patients</h3>
          <p>{stats.patients}</p>
        </div>
      </div>
      <div className={style.newUserTable}>
        <table>
          <caption>New Users</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. X</td>
              <td>mrx@gmail.com</td>
              <td>1990-03-24</td>
              <td>Patient</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard
