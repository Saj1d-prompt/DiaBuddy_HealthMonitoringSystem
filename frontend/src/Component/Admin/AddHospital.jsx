import React from 'react'
import styles from '../../Style/AddHospital.module.css'

const AddHospital = () => {
  const { handleSubmit, register, reset } = useForm();
  
  return (
    <div>
      <div className={styles.container}>
        <form action="" className={styles.form}>
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
          <div className={styles.row}>
            <label htmlFor="">Contact Number</label>
            <input type="text" placeholder='Enter Contact Number' />
          </div>
          <div className={styles.row}>
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder='Enter Email Address' />
          </div>
          <div className={styles.row}>
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter City' />
          </div>
          <div className={styles.row}>
            <label htmlFor="">Full Address</label>
            <textarea name="address" id="address"/>
          </div>
          <button type='submit' className={styles.submitBtn}>Add Healthcare Center</button>
        </form>
      </div >
    </div >
  )
}

export default AddHospital
