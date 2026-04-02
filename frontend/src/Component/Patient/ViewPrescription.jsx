import React , { useState } from 'react'
import style from '../../Style/ViewPrescription.module.css'
const ViewPrescription = () => {
  const [prescription, setPrescription] = useState([]);
  const fetchPrescription = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    try{

    }catch(error){
      console.error("Error fetching prescription:", error);
    }
  }
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
        <tbody>
          <tr>
            <td>2024-06-01</td>
            <td>Metformin</td>
            <td>1 tablet</td>
            <td>1+0+0</td>
            <td>1 month</td>
            <td>Dr. X</td>
            <td>After Meal</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ViewPrescription