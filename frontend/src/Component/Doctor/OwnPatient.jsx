import React from 'react'
import styles from '../../Style/PatientList.module.css'
import { useState } from 'react';

const OwnPatient = () => {
    const [patients, setPatients] = useState([]);
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
                            <tr>
                                <td>Mr. Y</td>
                                <td>45</td>
                                <td>Male</td>
                                <td>123456</td>
                                <td>A+</td>
                                <td>Type 2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OwnPatient
