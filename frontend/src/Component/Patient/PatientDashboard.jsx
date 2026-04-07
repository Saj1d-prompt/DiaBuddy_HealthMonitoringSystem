import React from 'react'
import BloodSugarReadings from './BloodSugarReading'
import ViewPrescription from './ViewPrescription'
import PatientNavbar from './PatientNavbar'
import styles from '../../Style/PatientDashboard.module.css'

const PatientDashboard = () => {
  return (
    <div>
      <div className={styles.personalInfo}>
        <h2>Mr. X</h2>
        <div className={styles.InfoFlex}>
          <p>Age: 45</p>
          <p>Gender: Male</p>
          <p>address: Basundhara R/A, Dhaka, Bangladesh</p>
        </div>
        <div className={styles.InfoFlex}>
          <p>Weight: 70 kg</p>
          <p>Height: 175 cm</p>
          <p>BMI: 22.9</p>
          <p>Blood Group: A+</p>
        </div>
      </div>
      <div className={styles.containerFlex}>
        <div className={styles.leftContainer}>
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Specialization</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. X</td>
                <td>Endocrinology</td>
                <td>12345</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.rightContainer}>
          <table>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Address</th>
                <th>Contact Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>City Hospital</td>
                <td>Dhaka</td>
                <td>67890</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
