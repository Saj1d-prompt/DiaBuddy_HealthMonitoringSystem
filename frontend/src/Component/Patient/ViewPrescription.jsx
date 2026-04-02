import React , { useState, useEffect } from 'react'
import style from '../../Style/ViewPrescription.module.css'
const ViewPrescription = () => {
  const [prescription, setPrescription] = useState([]);
  const fetchPrescription = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    try{
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/getPrescription`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${userInfo.token}`,
          "Content-Type": "application/json"
        }
      })
      const result = await res.json();
      if(result.status === 200){
        setPrescription(result.data);
      } else {
        console.error("Failed to fetch prescription:", result.message);
      }
    }catch(error){
      console.error("Error fetching prescription:", error);
    }
  }
  useEffect(() => {
    fetchPrescription();
  }, []);
  return (
    <div className={style.container}>
      <table className={style.table}>
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
          {prescription.map((presc) => (
            <tr key={presc.id}>
              <td>{new Date(presc.created_at).toLocaleDateString()}</td>
              <td>{presc.medicine_name}</td>
              <td>{presc.dosage}</td>
              <td>{presc.frequency}</td>
              <td>{presc.duration}</td>
              <td>{` Dr. ${presc.doctor.name}`}</td>
              <td>{presc.notes || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewPrescription