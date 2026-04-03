import React from 'react'
import DoctorInfoForm from './DoctorInfoForm'
import DoctorProfile from './DoctorProfile'
import Schedule from './Schedule'
import PatientList from './PatientList'
import DoctorNavbar from './DoctorNavbar'

const DoctorDashboard = () => {
  return (
    <div>
      <DoctorNavbar/>
      Test Dashboard
      <PatientList/>
    </div>
  )
}

export default DoctorDashboard
