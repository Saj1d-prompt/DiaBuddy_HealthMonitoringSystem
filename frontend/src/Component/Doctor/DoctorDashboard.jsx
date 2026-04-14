import React, { useEffect } from 'react'
import style from '../../Style/DoctorDashboard.module.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const DoctorDashboard = () => {
  const [userName,setUserName] = useState();
  const [stats, setStats] = useState({
    patients: 0,
    appointments: 0
  });
  const [appointments, setAppointments] = useState();
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
        setUserName(result.data.doctor.name);
        setStats({
          patients: result.data.patientNum,
          appointments: result.data.appointmentToday
        });
        setAppointments(result.data.appointment);
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
            <p>{stats.patients}</p>
          </div>
          <div className={style.statCard}>
            <h3>Appointments Today</h3>
            <p>{stats.appointments}</p>
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
            {appointments && appointments.map((app) => (
              <tr key={app.id}>
                <td>{app.patient_name}</td>
                <td>{app.start_time}</td>
                <td>{app.diabetes_type}</td>
              </tr>
            ))}
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
