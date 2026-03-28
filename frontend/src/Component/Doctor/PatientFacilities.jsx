import React, { use, useEffect } from 'react'
import styles from '../../Style/PatientFacilities.module.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const PatientFacilities = () => {
  const {id} = useParams();
  const [patient,setPatient] = useState(null);
  const fetchPatientInfo = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try{
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getPatientInfo/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      const result = await response.json();
      if(result.status === 200){
        setPatient(result.data);
      }
    }catch(e){
      console.error('Error fetching patient info:', e);
    }
  }
  const calculateBMI = (weight, height) => {
    if (height > 0) {
      return (weight / ((height / 100) ** 2)).toFixed(2);
    }
    return 0;
  };
  const calculateAge = (dateOfBirth) => {
    return Math.floor((new Date() - new Date(dateOfBirth)) / (365.25 * 24 * 60 * 60 * 1000));
  };
  useEffect(() => {
    fetchPatientInfo();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <aside className={styles.sideBar}>
          <button className={styles.backButton} onClick={() => window.history.back()}>← Back to Patients List</button>
          <div className={styles.patientInfo}>
            <h1>{patient?.user.name}</h1>
            <p>Gender: {patient?.data.gender}</p>
            <p>Age: {calculateAge(patient?.user.date_of_birth)}</p>
            <p>Phone Number: {patient?.data.number}</p>
            <p>Address: {patient?.data.address}</p>
          </div>
          <div className={styles.medicalInfo}>
            <div className={styles.medicalInfoGrid}>
              <div className={styles.medicalInfoItem}>
                <p>Height</p>
                <span>{patient?.data.height}cm</span>
              </div>
              <div className={styles.medicalInfoItem}>
                <p>Weight</p>
                <span>{patient?.data.weight} kg</span>
              </div>
              <div className={styles.medicalInfoItem}>
                <p>BMI</p>
                <span>{calculateBMI(patient?.data.weight, patient?.data.height)}</span>
              </div>
            </div>
            <div className={styles.medicalInfoDetails}>
              <p>Blood Group: {patient?.data.blood_group}</p>
              <p>Diabetes Type: {patient?.data.diabetes_type}</p>
            </div>
          </div>
        </aside>
      </div>
      <div>
        <nav className={styles.tabNav}>
          <button>Blood Suger Readings</button>
          <button>Medical Reports</button>
          <button>Prescriptions</button>
        </nav>
      </div>
    </div>
  )
}

export default PatientFacilities
