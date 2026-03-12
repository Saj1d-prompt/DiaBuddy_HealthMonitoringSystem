import React from 'react'
import styles from '../../Style/Profile.module.css'

const DoctorProfile = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1>Doctor Profile</h1>
                        <p>Update your medical credentials and clinic information</p>
                    </div>
                    <button className={styles.editButton}>Edit Profile</button>
                </div>
                <form>
                    <h3 className={styles.sectionTitle}>Academic & Professional</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Department</label>
                            <input type="text" name='department' value="Endocrinology" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Specialization</label>
                            <input type="text" name='specialization' value="Diabetes" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Medical License Number</label>
                            <input type="text" name='license_number' value="123456789" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Years of Experience</label>
                            <input type="text" name='experience' value="10 years" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Professional Biography</label>
                            <textarea name='bio' rows="3" value="Dr. Smith is a board-certified endocrinologist with over 10 years of experience in diabetes management and research." readOnly></textarea>
                        </div>
                    </div>
                    <h3 className={styles.sectionTitle}>Education & Background</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Highest Degree</label>
                            <input type="text" name='highest_degree' value="MBBS" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Medical School</label>
                            <input type="text" name='medical_school' value="Johns Hopkins University" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Graduation Year</label>
                            <input type="text" name='graduation_year' value="2010" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Awards & Achievements</label>
                            <textarea name='awards' rows="3" value="Best Endocrinologist 2020" readOnly></textarea>
                        </div>
                    </div>
                    <h3 className={styles.sectionTitle}>Clinic & Contact Details</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Clinic Name</label>
                            <input type="text" name='clinic_name' value="Downtown Diabetes Clinic" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name='phone' value="+1 234 567 8900" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Clinic Address</label>
                            <textarea name='clinic_address' rows="3" value="123 Main St, Anytown, USA" readOnly></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Consultation Hours</label>
                            <textarea name='consultation_hours' rows="3" value="Monday - Friday: 9am - 5pm" readOnly></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Consultation Fee</label>
                            <input type="text" name='fee' value="$150" readOnly />
                        </div>
                    </div>
                    <button type='submit' className={styles.saveButton}>Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default DoctorProfile
