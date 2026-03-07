import React from 'react'
import styles from '../../Style/DoctorInfo.module.css';

const DoctorInfoForm = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Doctor Information Form</h1>
            <p>Fill out the form below to get started</p>
        </div>
        <form action="">
            <label>Professional Credentials</label>
            <label htmlFor="department">Department</label>
            <select id="department">
                <option value="">Select a department</option>
                <option value="cardiology">Endocrinology</option>
                <option value="neurology">Diabetology</option>
                <option value="pediatrics">Nutrition</option>
                <option value="orthopedics">Podiatry</option>
                <option value="dermatology">Nephrology</option>
                <option value="cardiology">Cardiology</option>
            </select>
            <label htmlFor="License">License Number</label>
            <input type="text" id="License" name="License" required />
            <label htmlFor="Experience">Years of Experience</label>
            <input type="number" id="Experience" name="Experience" required />
        </form>
    </div>
  )
}

export default DoctorInfoForm
