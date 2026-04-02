import React from 'react'
import BloodSugarReadings from './BloodSugarReading'
import ViewPrescription from './ViewPrescription'

const PatientDashboard = () => {
  return (
    <div>
        Test Dashboard
        <button onClick={() => window.location.href = '/uploadreports'}>
          Upload Reports
        </button>
        <button onClick={() => window.location.href = '/viewreports'}>
          View Reports
        </button>
        <BloodSugarReadings />
        <ViewPrescription />
    </div>
  )
}

export default PatientDashboard
