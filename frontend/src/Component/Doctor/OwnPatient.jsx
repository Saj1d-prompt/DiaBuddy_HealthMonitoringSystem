import React from 'react'
import styles from '../../Style/PatientList.module.css'
import { useState, useEffect } from 'react';

const OwnPatient = () => {
    const [patients, setPatients] = useState([]);
    const fetchOwnPatient = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getOwnPatient`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userInfo.token}`
                }
            });
            const result = await response.json();
            if (result.status === 200) {
                setPatients(result.data);
            }
        } catch (error) {
            console.error('Error fetching own patients:', error);
        }
    }
    useEffect(() => {
        fetchOwnPatient();
    }, []);
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
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td>{patient.name}</td>
                                    <td>{Math.floor((new Date() - new Date(patient.date_of_birth)) / (365.25 * 24 * 60 * 60 * 1000))}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.number}</td>
                                    <td>{patient.blood_group}</td>
                                    <td>{patient.diabetes_type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OwnPatient
