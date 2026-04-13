import React from 'react'
import style from '../../Style/DoctorDashboard.module.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DoctorDashboard = () => {
  return (
    <div className={style.container}>
        <h2>Welcome, Dr. Md. X!</h2>
        <div className={style.statsContainer}>
          <div className={style.statCard}>
            <h3>Patients</h3>
            <p>120</p>
          </div>
          <div className={style.statCard}>
            <h3>Appointments Today</h3>
            <p>8</p>
          </div>
        </div>
        <div className={style.calendarContainer}>
          <h3>Calendar</h3>
          <Calendar />
      </div>
      </div>
  )
}

export default DoctorDashboard
