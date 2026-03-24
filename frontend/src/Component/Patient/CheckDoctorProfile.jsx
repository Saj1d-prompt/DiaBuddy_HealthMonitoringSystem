import React, { use, useEffect } from 'react'
import styles from '../../Style/CheckDoctorProfile.module.css'
import { useState } from 'react';

const CheckDoctorProfile = ({ doctor, onClose }) => {
    const formatTime = (time) => {
        if (!time) {
            return '';
        }
        const [hour, minute] = time.split(':');
        const hours = parseInt(hour)
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const h = hours % 12
        const formattedHour = h === 0 ? 12 : h;

        return `${formattedHour}:${minute} ${ampm}`;
    }
    const handleConfirm = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        try{

        }catch(error){
            console.error('Error booking appointment:', error);
        }
    }
    const [slots, setSlots] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [filteredSlots, setFilteredSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const fetchSlot = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        try {
            const res = await fetch(`${import.meta.env.VITE_API_KEY}/getDoctorSchedule/${doctor.user.id}`, ({
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`
                }
            }));
            const result = await res.json();
            if (result.status === 200) {
                setSlots(result.data);
            }
        }
        catch (error) {
            console.error('Error fetching doctor schedule:', error);
        }
    }
    useEffect(() => {
        fetchSlot();
    }, []);
    useEffect(() => {
        if (selectedDay) {
            const filtered = slots.filter(slot => slot.day === selectedDay.toLowerCase());
            setFilteredSlots(filtered);
        }
    }, [selectedDay, slots]);
    const [bookingMode, setBookingMode] = useState(false);
    return (
        <div>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                    <div className={styles.header}>
                        <h2>{doctor.user.name}</h2>
                        <span className={styles.badge}>{doctor.department}</span>
                    </div>
                    <div className={styles.infoSection}>
                        <div>
                            <h4>Professional Bio</h4>
                            <p>{doctor.profBio}</p>
                        </div>
                        <div className={styles.infoGrid}>
                            <div>
                                <h4>Education</h4>
                                <p>{doctor.highestDegree} - {doctor.medicalSchool}</p>
                                <small>Class of {doctor.gradYear}</small>
                            </div>
                            <div>
                                <h4>Experience</h4>
                                <p>{doctor.yearOfExperience} Years</p>
                            </div>
                            <div>
                                <h4>Consultation Fee</h4>
                                <p className={styles.fee}>{doctor.fee} tk</p>
                            </div>
                        </div>
                        {bookingMode ? (
                            <div>
                                <div className={styles.bookingContainer}>
                                    <h3>Book an Appointment</h3>
                                    <div>
                                        <label htmlFor="day">Select Day: </label>
                                        <select id="day" className={styles.daySelect} value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                                            <option value="">Select Day</option>
                                            {days.map((day) => (
                                                <option key={day} value={day.toLocaleLowerCase()}>{day}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="date">Select Date: </label>
                                        <input type="date" id="date" className={styles.dateInput} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                                    </div>
                                    <div className={styles.slotsWrapper}>
                                        <h4>Available Slots:</h4>
                                        {filteredSlots.length == 0 ? (
                                            <p>No slots available</p>
                                        ) : (
                                            filteredSlots.map((slot) => (
                                                <div key={slot.id}
                                                    className={`${styles.slot} ${selectedSlot === slot.id ? styles.selected : ""}`}
                                                    onClick={() =>
                                                        setSelectedSlot(selectedSlot === slot.id ? null : slot.id)
                                                    }>
                                                    {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.confirmBtn} onClick={handleConfirm}>Confirm</button>
                                    <button className={styles.backBtn} onClick={() => setBookingMode(false)}>Back</button>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.clinicSection}>
                                <h4>Clinic: {doctor.clinicName}</h4>
                                <p style={{ marginTop: "10px" }}>Address: <strong>{doctor.clinicAddress}</strong></p>
                                <div>
                                    <button className={styles.bookBtn} onClick={() => setBookingMode(true)}>Book Appointment</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckDoctorProfile
