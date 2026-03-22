import React, { useEffect } from 'react'
import styles from '../../Style/DoctorSchedule.module.css'
import { useState } from 'react';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({
    day: 'Monday',
    start_time: '',
    end_time: ''
  }
  );
  const formatTime = (time) => {
    if (!time) {
      return '';
    }
    const [hour, minute] = time.split(':');
    const hours = parseInt(hour)
    const ampm = hours >= 12 ? 'PM' : 'AM';
  }
  const AddSlot = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/addSlot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        },
        body: JSON.stringify(newSlot)
      })
      const result = await res.json();
      if (result.status === 200) {
        fetchSlots();
        setNewSlot({
          day: 'Monday',
          start_time: '',
          end_time: ''
        });
      }
    } catch (error) {
      console.error('Error adding slot:', error);
    }
  }
  const DeleteSlot = async (slotId) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/deleteSlot/${slotId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      })
      const result = await res.json();
      if (result.status === 200) {
        fetchSlots();
      }
    }catch (error) {
      console.error('Error deleting slot:', error);
    }
  }
  const fetchSlots = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getSlot`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo.token}`
        }
      })
      const result = await res.json();
      if (result.status === 200) {
        setSlots(result.data);
      }
    }
    catch (error) {
      console.error('Error fetching slots:', error);
    }
  }
  useEffect(() => {
    fetchSlots();
  }, []);
  return (
    <div className={styles.container}>
      <h2>Manage Your Visiting Hour Slots</h2>
      <p>Set your availability for patient appointments by managing your visiting hour slots.
        You can add, edit, or remove time slots to ensure patients can book appointments at convenient times.
      </p>

      <form action="" className={styles.slotForm} onSubmit={AddSlot}>
        <select name="day" id="" onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })} value={newSlot.day}>
          {days.map((day) => (
            <option key={day} value={day} >
              {day}
            </option>
          ))}
        </select>
        <input type="time" name="start_time" id="" onChange={(e) => setNewSlot({ ...newSlot, start_time: e.target.value })} value={newSlot.start_time} />
        <input type="time" name="end_time" id="" onChange={(e) => setNewSlot({ ...newSlot, end_time: e.target.value })} value={newSlot.end_time} />
        <button type="submit">Add Slot</button>
      </form>
      <div className={styles.slotList}>
        {days.map((day) => (
          <div key={day} className={styles.dayGroup}>
              <h3>{day}</h3>
              <div className={styles.chips}>
                {slots.filter(slot => slot.day === day.toLowerCase()).map((slot) => (
                  <div key={slot.id} className={styles.slotChip}>
                    {slot.start_time} - {slot.end_time}
                    <button onClick={() => DeleteSlot(slot.id)}>&times;</button>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
