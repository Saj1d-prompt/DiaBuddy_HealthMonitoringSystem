import React from 'react'
import styles from '../../Style/PatientFacilities.module.css'

const PatientFacilities = () => {
  return (
    <div>
      <div>
        <aside className={styles.sideBar}>
          <button className={styles.backButton}>← Back to Patients List</button>
          <div className={styles.patientInfo}>
            <h1>John Smith</h1>
            <p>Gender Male</p>
            <p>Age 45</p>
            <p>Phone Number: 123-456-7890</p>
            <p>Address: Dhaka Bangladesh</p>
          </div>
          <div className={styles.medicalInfo}>
            <div className={styles.medicalInfoGrid}>
              <p>Height: 180cm</p>
              <p>Weight: 80kg</p>
              <p>BMI: 24.7</p>
            </div>
          </div>
          <div className={styles.medicalDetails}>
            <p>Blood Group: A+</p>
            <p>Diabetes Type: Type 2</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PatientFacilities
