import React, { useEffect } from 'react'
import style from '../../Style/DoctorDashboard.module.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const DoctorDashboard = () => {
  const [userName,setUserName] = useState();
  const fetchDoctorInfo = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try{
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getDoctorInfo`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`,
          'Content-Type': 'application/json'
        }
      });
      const result = await res.json();
      if(result.status === 200){
        setUserName(result.data.name);
      }
    }catch(error){
      console.error("Error fetching doctor info:", error);
    }
  }
  useEffect(() => {
    fetchDoctorInfo();
  }, []);
  return (
    <div className={style.container}>
      <h2>Welcome, Dr. {userName}!</h2>
        <div className={style.dashboardGrid}>
          <div className={style.statCard}>
            <h3>Patients</h3>
            <p>120</p>
          </div>
          <div className={style.statCard}>
            <h3>Appointments Today</h3>
            <p>8</p>
          </div>
        <div className={style.calendarContainer}>
          <h3>Calendar</h3>
          <Calendar />
        </div>
      
      <div className={style.appointmentTable}>
        <h2>Todays Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Time</th>
              <th>Diabetes Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. Y</td>
              <td>10:00 AM</td>
              <td>Type 2</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
