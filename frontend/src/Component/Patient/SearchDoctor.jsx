import React from 'react'
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
    
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    }
  }
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
            <h3>Dr. John Smith</h3>
            <span>Endocrinologist</span>
            <p><strong>Experience:</strong> 10 Years</p>
            <p><strong>Clinic:</strong> Diabetes Center</p>
            <p><strong>Fee:</strong> $100</p>
            <button className={styles.viewBtn}>View Profile</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SearchDoctor
