import React from 'react'
import styles from '../../Style/PatientList.module.css'

const PatientList = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2>Upcoming Appointments</h2>
        <div className={styles.appointmentList}>
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Date of Birth</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                </tr>
            </thead>
        </div>
      </div>
    </div>
  )
}

export default PatientList
