import React from 'react'
import styles from '../../Style/AddHospital.module.css'
import { useForm } from 'react-hook-form';

const AddHospital = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (data) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }
  return (
    <div>
      <div className={styles.container}>
        <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Healthcare Center</h2>
          <div className={styles.row}>
            <label htmlFor="type">Healthcare Center Type</label>
            <select {...register('type')} name="type" id="type" required>
              <option value="hospital">Hospital</option>
              <option value="diagnostic_center">Diagnostic Center</option>
            </select>
          </div>
          <div className={styles.row}>
            <label htmlFor="name">Healthcare Center Name</label>
            <input type="text" {...register('name')} placeholder='Enter Healthcare Center Name' />
          </div>
          <div className={styles.row}>
            <label htmlFor="license_number">Government License Number</label>
            <input type="text" {...register('license_number')} placeholder='Enter Government License Number' />
          </div>
          <div className={styles.row}>
            <label htmlFor="phone">Contact Number</label>
            <input type="text" {...register('phone')} placeholder='Enter Contact Number' />
          </div>
          <div className={styles.row}>
            <label htmlFor="email">Email Address</label>
            <input type="email" {...register('email')} placeholder='Enter Email Address' />
          </div>
          <div className={styles.row}>
            <label htmlFor="city">City</label>
            <input type="text" {...register('city')} placeholder='Enter City' />
          </div>
          <div className={styles.row}>
            <label htmlFor="address">Full Address</label>
            <textarea {...register('address')} name="address" id="address"/>
          </div>
          <button type='submit' className={styles.submitBtn}>Add Healthcare Center</button>
        </form>
      </div >
    </div >
  )
}

export default AddHospital
