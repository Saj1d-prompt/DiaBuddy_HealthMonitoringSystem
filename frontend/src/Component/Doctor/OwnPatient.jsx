import React from 'react'
import styles from '../../Style/PatientList.module.css'

const OwnPatient = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2>Patients that Visited You</h2>
                <div className={styles.appointmentList}>
                    <table>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Contact Number</th>
                                <th>Blood Group</th>
                                <th>Diabetes Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OwnPatient
