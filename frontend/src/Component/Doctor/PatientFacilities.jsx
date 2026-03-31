import React, { use, useEffect } from 'react'
import styles from '../../Style/PatientFacilities.module.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const PatientFacilities = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [bsr, setBsr] = useState([]);
  const [reports, setReports] = useState([]);
  const [medicine, setMedicine] = useState([
    { name: '', dosage: '', frequency: '', duration: '' }
  ]);

  const addMedicine = () => {
    setMedicine(
      (previous) => [...previous, { name: '', dosage: '', frequency: '', duration: '' }]
    );
  };

  const removeMedicine = (index) => {
    const newMedicine = [...medicine];
    newMedicine.splice(index, 1);
    setMedicine(newMedicine);
  }

  const handleMedicineChange = (index, e) => {
    const { name, value } = e.target;
    setMedicine((previous) => {
      const newMedicine = [...previous];
      newMedicine[index][name] = value;
      return newMedicine;
    });
  }

  const fetchReports = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getPatientReport/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      const result = await response.json();
      if (result.status === 200) {
        setReports(result.data);
      }
    } catch (e) {
      console.error('Error fetching reports:', e);
    }
  }

  const fetchBsr = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getBSR/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      const result = await response.json();
      if (result.status === 200) {
        setBsr(result.data);
      }
    } catch (e) {
      console.error('Error fetching BSR:', e);
    }
  }
  const fetchPatientInfo = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getPatientInfo/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      const result = await response.json();
      if (result.status === 200) {
        setPatient(result.data);
      }
    } catch (e) {
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
    fetchBsr();
    fetchReports();
  }, []);
  const [activeTab, setActiveTab] = useState('');
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
          <button onClick={() => setActiveTab('bsr')}>Blood Suger Readings</button>
          <button onClick={() => setActiveTab('reports')}>Medical Reports</button>
          <button onClick={() => setActiveTab('prescriptions')}>Prescriptions</button>
        </nav>
        <div className={styles.contentContainer}>
          {activeTab === 'bsr' && (
            <div className={styles.tableContainer}>
              <h2>Blood Sugar Readings</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date and Time</th>
                    <th>Category</th>
                    <th>Glucose Level</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {bsr.map((readings) => (
                    <tr key={readings.id}>
                      <td>{new Date(readings.created_at).toLocaleString()}</td>
                      <td>{readings.category}</td>
                      <td>{readings.glucose_level}</td>
                      <td>{readings.notes || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'reports' && (
            <div className={styles.tableContainer}>
              <h2>Medical Reports History</h2>
              <table>
                <thead>
                  <tr>
                    <th>Test Date</th>
                    <th>Report Type</th>
                    <th>Laboratory/Hospital</th>
                    <th>Comments</th>
                    <th>Report</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id}>
                      <td>{report.reportDate}</td>
                      <td><span className={styles.reportType}>{report.reportType}</span></td>
                      <td>{report.labName}</td>
                      <td>{report.comments || '-'}</td>
                      <td><a className={styles.viewReportLink} href={`${import.meta.env.VITE_STORAGE_URL}/${report.filePath}`} target="_blank" rel="noopener noreferrer">View Report</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'prescriptions' && (
            <div className={styles.prescriptionContainer}>
              <h2>Prescribe Medicines</h2>
              <form action="">
                {medicine.map((med, index) => (
                  <div key={index} className={styles.medicineBlock}>
                    <div className={styles.medFormGroup}>
                      <label htmlFor="medicineName">Medicine Name</label>
                      <input type="text" id="medicineName" value={med.name} name="medicineName" placeholder="Enter medicine name" />
                    </div>
                    <div className={styles.medFormGroup}>
                      <label htmlFor="dosage">Dosage</label>
                      <input type="text" id="dosage" value={med.dosage} name="dosage" placeholder="Enter dosage information (e.g., 1 tablet)" />
                    </div>
                    <div className={styles.medFormGroup}>
                      <label htmlFor="frequency">Frequency</label>
                      <input type="text" id="frequency" value={med.frequency} name="frequency" placeholder="Enter frequency (e.g., twice a day or 1+0+1)" />
                    </div>
                    <div className={styles.medFormGroup}>
                      <label htmlFor="duration">Duration</label>
                      <input type="text" id="duration" value={med.duration} name="duration" placeholder="Enter duration (e.g., 5 days)" />
                    </div>
                    {medicine.length > 1 && (
                      <button type="button" className={styles.removeMedicineButton} onClick={() => removeMedicine(index)}>Remove Medicine</button>
                    )}
                  </div>
                ))}
                <div>
                  <button type='button' className={styles.addMedicineButton} onClick={addMedicine}> + Add Medicine</button>
                </div>
                <button type="submit" className={styles.prescribeButton}>Prescribe</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PatientFacilities
