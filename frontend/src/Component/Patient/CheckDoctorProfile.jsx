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
        <div className={styles.infoGrid}>
            <div>
                <h4>Education</h4>
                <p>MBBS - A Medical School</p>
                <small>Class of 2010</small>
            </div>
            <div>
                <h4>Experience</h4>
                <p>10 Years</p>
            </div>
            <div>
                <h4>Consultation Fee</h4>
                <p>1000 tk</p>
            </div>
        </div>
        <div className={styles.clinicSection}>
            <h4>Clinic: Dr. Smith's Clinic</h4>
            <p>123 Main Street, City, State 12345</p>
            <p><strong>Hours:</strong> 9:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div>
        <button className={styles.bookBtn}>Book Appointment</button>
      </div>
    </div>
  )
}

export default CheckDoctorProfile
