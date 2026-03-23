import React from 'react'
import styles from '../../Style/CheckDoctorProfile.module.css'
import { useState } from 'react';

const CheckDoctorProfile = ({ doctor, onClose }) => {
    const fetchSlot = async () =>{
        
    }
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
                                <h3>Book an Appointment</h3>
                                <p>Booking functionality coming soon...</p>
                            </div>
                        ) : (
                            <div className={styles.clinicSection}>
                                <h4>Clinic: {doctor.clinicName}</h4>
                                <p>{doctor.clinicAddress}</p>
                                <p><strong>Hours:</strong> {doctor.consultationHours}</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <button className={styles.bookBtn} onClick={() => setBookingMode(true)}>Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckDoctorProfile
