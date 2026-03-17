import React, { useEffect } from 'react'
import styles from '../../Style/SearchDoctor.module.css'
import { useState } from 'react';

const SearchDoctor = () => {
  const [doctor, setDoctor] = useState([]);
  const [selectDoc, setSelectDoc] = useState(null);
  const [filter, setFilter] = useState({
    department: '',
    city: ''
  });
  const fetchDoctor = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try{
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/searchDoctor?department=${filter.department}&city=${filter.city}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`,
          'Content-Type': 'application/json'
        }
      })
      const result = await res.json();
      if (result.status === 200) {
        setDoctor(result.data);
      }
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  }
  useEffect(() => {
    fetchDoctor();
  }, [filter])
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Find a Diabetes Specialist</h1>
          <div className={styles.searchBox}>
            <select
              value={filter.department}
              onChange={(e) => setFilter({ ...filter, department: e.target.value })}
            >
              <option value="">Select Department</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Cardiology">Cardiology</option>
            </select>
            <input
              type="text"
              placeholder="Search by location or city"
              value={filter.city}
              onChange={(e) => setFilter({ ...filter, city: e.target.value })}
            />
          </div>
        </div>
        <div className={styles.doctorList}>
          <div className={styles.doctorCard}>
          {doctor.map((doc) => (
            <div key={doc.id} className={styles.doctorCard}>
              <h3>{doc.user.name}</h3>
              <span>{doc.department}</span>
              <p><strong>Experience:</strong> {doc.yearOfExperience} Years</p>
              <p><strong>Clinic:</strong> {doc.clinicAddress}</p>
              <p><strong>Fee:</strong> {doc.fee} Taka</p>
              <button onClick={() => setSelectDoc(doc)} className={styles.viewBtn}>View Profile</button>
            </div>
          ))}
          </div>
        </div>
      </div>
      {selectDoc && (
        <CheckDoctorProfile doctor={selectDoc} onClose={() => setSelectDoc(null)} />
      )}
    </div>
  )
}

export default SearchDoctor
