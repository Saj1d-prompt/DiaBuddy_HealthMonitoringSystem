import React from 'react'
import styles from '../../Style/Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1>Profile</h1>
            <p>Manage Your personal and Health Details</p>
          </div>
          <button className={styles.editButton}>Edit Profile</button>
        </div>

        <form action="">
          <h3 className={styles.sectionTitle}>Personal Information</h3>
          <div className={styles.grid}>

            <div className={styles.formGroup}>
              <label htmlFor="">Phone Number</label>
              <input type="text" name='number' />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="">Gender</label>
              <select name="gender" id="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="">Address</label>
              <textarea type="text" name='address' rows="3" />
            </div>

          </div>

          <h3 className={styles.sectionTitle}>Health Information</h3>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label htmlFor="">Height (cm)</label>
              <input type="text" name='height' />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="">Weight (kg)</label>
              <input type="text" name='weight' />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="bloodGroup">Blood Group</label>
              <div className={styles.viewValue}>O+</div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="diabetesType">Diabetes Type</label>
              <div className={styles.viewValue}>Pre-diabetes</div>
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Your BMI</label>
              <input type="text" className={styles.bmiDisplay} readOnly />
            </div>
          </div>
          <button type='submit' className={styles.saveButton}>Save Changes</button>
        </form >

      </div >
    </div >
  )
}

export default Profile
