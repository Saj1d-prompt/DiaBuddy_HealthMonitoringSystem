import React from 'react'
import styles from '../../Style/BloodSugarReadings.module.css'
import { useState } from 'react';

const BloodSugarReading = () => {
  const [formData, setFormData] = useState({
    glucose_level: '',
    category: 'Fasting',
    reading_time: new Date().toISOString().slice(0, 16), // Pre-fills current time
    notes: ''
  });
  const categories = ['Fasting', 'Before Meal', 'After Meal', 'Bedtime', 'Random', 'Exercise']; 
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Blood Sugar Reading</h2>
      <form action="">
        <div className={styles.inputs}>
          <div className={styles.formGroup}>
            <label>Glucose Level (mg/dL)</label>
            <input type="number" step="0.1" min="0" />
          </div>
          <div className={styles.formGroup}>
            <label>Date and Time</label>
            <input type="datetime-local" />
          </div>
          <label>Measurement Context</label>
          <div className={styles.categoryGrid}>
            <select name="category" id="category">
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Notes (Optional)</label>
            <textarea name="notes" id="notes" rows="3" placeholder='What did you eat? Did you exercise?'></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>Save Readings</button>

        </div>
      </form >
    </div >
  )
}

export default BloodSugarReading
