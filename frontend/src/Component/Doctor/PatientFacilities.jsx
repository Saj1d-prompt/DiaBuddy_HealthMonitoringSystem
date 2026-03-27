import React from 'react'
import styles from '../../Style/PatientFacilities.module.css'

const PatientFacilities = () => {
  return (
    <div>
      <div>
        <aside>
          <button>← Back to Patients List</button>
          <div className="patientInfo">
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
          Blood Group: A+
          Diabetes Type: Type 2 
        </aside>
      </div>
    </div>
  )
}

export default PatientFacilities
