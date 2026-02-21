import React from 'react'
import styles from '../../Style/BloodSugarReadings.module.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const BloodSugarReading = () => {

  const { handleSubmit, register, reset } = useForm();
  const [notification, setNotification] = useState('');
  const categories = ['Fasting', 'Before Meal', 'After Meal', 'Bedtime', 'Random', 'Exercise'];
  const onSubmit = async (data) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    await fetch(`${import.meta.env.VITE_API_KEY}/storebsReadings`, {
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
          setNotification("Blood Sugar Reading saved successfully.");
          reset();
        } else {
          setNotification("Failed to save Blood Sugar Reading. Please try again.");
        }
      })
      .catch((error) => {
        console.log("Error saving Blood Sugar Reading. Please try again.", error);
      });
  }
  useEffect(() => {
      if (!notification) return;

      const timer = setTimeout(() => {
        setNotification('');
      }, 2000);

      return () => clearTimeout(timer);
    }, [notification]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Blood Sugar Reading</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>

          {notification && (
            <div className={styles.notification}>
              <p>{notification}</p>
            </div>
          )}
          <div className={styles.formGroup}>
            <label>Glucose Level (mg/dL)</label>
            <input type="number" step="0.1" min="0" {...register("glucose_level", { required: true })} />
          </div>
          <div className={styles.formGroup}>
            <label>Date and Time</label>
            <input type="datetime-local" {...register("timestamp", { required: true })} />
          </div>
          <label>Measurement Context</label>
          <div className={styles.categoryGrid}>
            <select name="category" id="category" {...register("category", { required: true })}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Notes (Optional)</label>
            <textarea name="notes" id="notes" rows="3" placeholder='What did you eat? Did you exercise?' {...register("notes")}></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>Save Readings</button>

        </div>
      </form >
    </div >
  )
}

export default BloodSugarReading
