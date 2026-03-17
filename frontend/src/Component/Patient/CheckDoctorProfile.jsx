import React from 'react'
import styles from '../../Style/CheckDoctorProfile.module.css'

const CheckDoctorProfile = ({ doctor, onClose }) => {
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
                        <div className={styles.clinicSection}>
                            <h4>Clinic: Dr. Smith's Clinic</h4>
                            <p>123 Main Street, City, State 12345</p>
                            <p><strong>Hours:</strong> 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <button className={styles.bookBtn}>Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckDoctorProfile
