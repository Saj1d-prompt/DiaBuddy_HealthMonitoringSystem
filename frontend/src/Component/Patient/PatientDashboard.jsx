import React from 'react'
import Profile from './Profile'
import SearchDoctor from './SearchDoctor'

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
        <SearchDoctor />
    </div>
  )
}

export default PatientDashboard
