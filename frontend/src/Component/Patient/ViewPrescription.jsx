import React from 'react'
import style from '../../Styles/ViewPrescription.module.css'

const ViewPrescription = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Prescribed Date</th>
            <th>Medicine Name</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Duration</th>
            <th>Prescribed Doctor</th>
            <th>Notes</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default ViewPrescription