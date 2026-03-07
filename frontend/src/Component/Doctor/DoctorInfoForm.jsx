import React from 'react'
import styles from '../../Style/DoctorInfo.module.css';

const DoctorInfoForm = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.setupForm}>
                <h1>Doctor Information Form</h1>
                <p>Fill out the form below to get started</p>
                <div className={styles.section}>
                    <h2>Professional Credentials</h2>
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
                </div>

            </form>
        </div>
    )
}

export default DoctorInfoForm
