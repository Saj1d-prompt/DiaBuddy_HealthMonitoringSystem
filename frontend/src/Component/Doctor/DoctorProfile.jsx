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

            </div>
        </div>
    )
}

export default DoctorProfile
