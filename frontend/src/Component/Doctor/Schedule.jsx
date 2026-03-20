import React from 'react'
import styles from '../../Style/DoctorSchedule.module.css'

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div className={styles.container}>
      <h2>Manage Your Visiting Hour Slots</h2>
      <p>Set your availability for patient appointments by managing your visiting hour slots.
        You can add, edit, or remove time slots to ensure patients can book appointments at convenient times.
      </p>

      <form action="">
        <select name="day" id="">
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default Schedule
