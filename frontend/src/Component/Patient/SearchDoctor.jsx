import React from 'react'
import styles from '../../Style/SearchDoctor.module.css'

const SearchDoctor = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Find a Diabetes Specialist</h1>
          <div className={styles.searchBox}>
            <select>
              <option value="">Select Department</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Cardiology">Cardiology</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchDoctor
