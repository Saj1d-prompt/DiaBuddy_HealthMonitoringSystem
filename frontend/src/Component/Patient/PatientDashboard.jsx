import React from 'react'
import BloodSugarReadings from './BloodSugarReading'
import ViewPrescription from './ViewPrescription'
import PatientNavbar from './PatientNavbar'

const PatientDashboard = () => {
  return (
    <div>
      <div className="personalInfo">
        <h2>Mr. X</h2>
        <div className="InfoFlex">
          <p>Age: 45</p>
          <p>Gender: Male</p>
          <p>address: Basundhara R/A, Dhaka, Bangladesh</p>
        </div>
        <div className="InfoFlex">
          <p>Weight: 70 kg</p>
          <p>Height: 175 cm</p>
          <p>Blood Group: A+</p>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
