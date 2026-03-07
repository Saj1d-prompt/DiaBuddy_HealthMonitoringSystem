import React from 'react'
import styles from '../../Style/DoctorInfo.module.css';

const DoctorInfoForm = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.setupForm}>
                <h1>Doctor Information Form</h1>
                <p>Fill out the form below to get started</p>
                <div className={styles.section}>
                    <h2>Professional Details</h2>
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
                    <label htmlFor="specialty">Specialization</label>
                    <input type="text" id="specialty" name="specialty" required />
                    <label htmlFor="License">License Number</label>
                    <input type="text" id="License" name="License" required />
                    <label htmlFor="Experience">Years of Experience</label>
                    <input type="number" id="Experience" name="Experience" required />
                    <label htmlFor="profBio">Professional Biography</label>
                    <textarea id="profBio" name="profBio" />
                </div>
                <div className={styles.section}>
                    <h2>Education & Background</h2>
                    <label htmlFor="HighestDegree">Highest Degree</label>
                    <input type="text" id="HighestDegree" name="HighestDegree" />
                    <label htmlFor="MedicalSchool">Medical School</label>
                    <input type="text" id="MedicalSchool" name="MedicalSchool" />
                    <label htmlFor="GraduationYear">Graduation Year</label>
                    <input type="number" id="GraduationYear" name="GraduationYear" />
                    <label htmlFor="Awards">Awards or Special Achievements(Optional)</label>
                    <textarea id="Awards" name="Awards"></textarea>
                </div>
                <div className={styles.section}>
                    <h2>Clinic & Contact Details</h2>
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input type="text" id="phoneNum" name="phoneNum" />
                    <label htmlFor="clinicName">Clinic Name</label>
                    <input type="text" id="clinicName" name="clinicName" />
                    <label htmlFor="clinicAddress">Full Clinic Address</label>
                    <textarea id="clinicAddress" name="clinicAddress" />
                    <label htmlFor="consultationHours">Consultation Hours</label>
                    <textarea id="consultationHours" name="consultationHours" />
                    <label htmlFor="fee">Consultation Fee</label>
                    <input type="text" name="fee" id="fee" />
                </div>
                <button type="submit" className={styles.submitBtn}>Submit Information</button>
            </form>
        </div>
    )
}

export default DoctorInfoForm
