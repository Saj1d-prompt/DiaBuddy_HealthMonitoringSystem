import React from 'react'
import styles from '../../Style/AddHospital.module.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const AddHospital = () => {
  const { handleSubmit, register, reset } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    await fetch(`${import.meta.env.VITE_API_KEY}/admin/addHospital`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          setError("Healthcare Center added successfully.");
          reset();
          setTimeout(() => {
            setError(null);
          }, 2000);
        } else {
          setError("Registration failed. Please try again with Valid Credentials.");
          setTimeout(() => {
            setError(null);
          }, 2000);
        }
      })
  }
  return (
    <div>
      <div className={styles.container}>
        <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Healthcare Center</h2>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.row}>
            <label htmlFor="type">Healthcare Center Type</label>
            <select {...register('type')} name="type" id="type" required>
              <option value="hospital">Hospital</option>
              <option value="diagnosis_center">Diagnostic Center</option>
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
            <textarea {...register('address')} name="address" id="address" />
          </div>
          <button type='submit' className={styles.submitBtn}>Add Healthcare Center</button>
        </form>
      </div >
    </div >
  )
}

export default AddHospital
