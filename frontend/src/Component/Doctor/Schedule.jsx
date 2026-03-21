import React from 'react'
import styles from '../../Style/DoctorSchedule.module.css'
import { useState } from 'react';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({
    day: '',
    start_time: '',
    end_time: ''
  }
  );
  const fetchSlots = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const res = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getSlot`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo.token}`
      }
    })
    const result = await res.json();
    if(result.status === 200){
      setSlots(result.data);
    }
  }
  return (
    <div className={styles.container}>
      <h2>Manage Your Visiting Hour Slots</h2>
      <p>Set your availability for patient appointments by managing your visiting hour slots.
        You can add, edit, or remove time slots to ensure patients can book appointments at convenient times.
      </p>

      <form action="" className={styles.slotForm}>
        <select name="day" id="">
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <input type="time" name="start_time" id="" />
        <input type="time" name="end_time" id="" />
        <button type="submit">Add Slot</button>
      </form>
      <div className={styles.slotList}>

        <div className={styles.dayGroup}>
          <h3>Monday</h3>
          <div className={styles.chips}>
            <div className={styles.slotChip}>
              09:00 - 11:00
              <button>&times;</button>
            </div>
            <div className={styles.slotChip}>
              14:00 - 16:00
              <button>&times;</button>
            </div>
          </div>
        </div>

        <div className={styles.dayGroup}>
          <h3>Tuesday</h3>
          <div className={styles.chips}>
            <div className={styles.slotChip}>
              10:00 - 12:00
              <button>&times;</button>
            </div>
          </div>
        </div>

        <div className={styles.dayGroup}>
          <h3>Wednesday</h3>
          <div className={styles.chips}>
            <div className={styles.slotChip}>
              08:00 - 10:00
              <button>&times;</button>
            </div>
            <div className={styles.slotChip}>
              15:00 - 17:00
              <button>&times;</button>
            </div>
          </div>
        </div>

        <div className={styles.dayGroup}>
          <h3>Thursday</h3>
          <div className={styles.chips}>
            <div className={styles.slotChip}>
              09:00 - 10:30
              <button>&times;</button>
            </div>
          </div>
        </div>

        <div className={styles.dayGroup}>
          <h3>Friday</h3>
          <div className={styles.chips}>
            <div className={styles.slotChip}>
              12:00 - 14:00
              <button>&times;</button>
            </div>
          </div>
        </div>

        <div className={styles.dayGroup}>
          <h3>Saturday</h3>
          <div className={styles.chips}>
            <div className={styles.slotChip}>
              09:00 - 11:00
              <button>&times;</button>
            </div>
          </div>
        </div>

        <div className={styles.dayGroup}>
          <h3>Sunday</h3>
          <div className={styles.chips}>
            <div className={styles.slotChip}>
              07:00 - 09:00
              <button>&times;</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Schedule
