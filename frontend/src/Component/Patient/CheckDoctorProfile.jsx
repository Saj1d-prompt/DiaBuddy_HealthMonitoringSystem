import React from 'react'
import styles from '../../Style/CheckDoctorProfile.module.css'

const CheckDoctorProfile = () => {
  return (
    <div>
      <div className={styles.header}>
        <h2>Dr. John Smith</h2>
        <span>Endocrinologist</span>
      </div>
      <div className={styles.infoSection}>
        <div>
            <h4>Professional Bio</h4>
            <p>Hiiiiiiiiiiiiiii</p>
        </div>
      </div>
    </div>
  )
}

export default CheckDoctorProfile
