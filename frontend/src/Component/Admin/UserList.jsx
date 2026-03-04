import React from 'react'
import styles from '../../Style/UserList.module.css'

const UserList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>User List</h1>
        <div>
            <label htmlFor="roleFilter">Filter by Role:</label>
            <select id="roleFilter" className={styles.filterSelect} name="roleFilter">
                <option value="all">All</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>
        </div>
      </div>
    </div>
  )
}

export default UserList
