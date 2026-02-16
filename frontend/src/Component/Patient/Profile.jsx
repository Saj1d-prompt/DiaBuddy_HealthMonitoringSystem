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
      </div>
    </div>
  )
}

export default Profile
