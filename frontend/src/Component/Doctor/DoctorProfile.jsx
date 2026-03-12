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
                            <label htmlFor="">Medical License Number</label>
                            <input type="text" name='license_number' value="123456789" readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Specialization</label>
                            <input type="text" name='specialization' value="Endocrinology" readOnly />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default DoctorProfile
