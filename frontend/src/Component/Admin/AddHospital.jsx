import React from 'react'
import styles from '../../Style/AddHospital.module.css'

const AddHospital = () => {
  return (
    <div>
      <div className={styles.container}>
        <form action="">
          <h2>Add Healthcare Center</h2>
          <div className={styles.row}>
            <label htmlFor="">Healthcare Center Type</label>
            <select>
              <option value="hospital">Hospital</option>
              <option value="diagnostic_center">Diagnostic Center</option>
            </select>
          </div>
          <div className={styles.row}>
            <label htmlFor="">Healthcare Center Name</label>
            <input type="text" placeholder='Enter Healthcare Center Name' />
          </div>
          <div className={styles.row}>
            <label htmlFor="">Government License Number</label>
            <input type="text" placeholder='Enter Government License Number' />
          </div>
        </form>
      </div >
    </div >
  )
}

export default AddHospital
