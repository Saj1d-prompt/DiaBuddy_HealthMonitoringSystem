import React from 'react'
import styles from '../../Style/OneTimeInfo.module.css'

const OneTimeInfoForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Complete Your Profile</h1>
                <p>Help us personalize your health journey</p>
            </div>
            <form action="">
                <h3 className={styles.sectionTitle}>Personal Information</h3>

                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="number">Phone Number</label>
                        <input type="tel" id="number" name="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender">
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Current Address</label>
                        <textarea id="address" name="address" placeholder="Enter your current address" rows="3"></textarea>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default OneTimeInfoForm
