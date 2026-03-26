import React from 'react'
import styles from '../../Style/PatientList.module.css'
import { useState } from 'react';

const PatientList = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const fetchAppointmentList = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        try{
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getAppointmentList`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userInfo.token}`
                }
            });
            const result = await response.json();
            if(result.status === 200){
                setAppointmentList(result.data);
            }
        }catch(error){
            console.error('Error fetching appointment list:', error);
        }
    }
    return (
        <div>
            <div className={styles.container}>
                <h2>Upcoming Appointments</h2>
                <div className={styles.appointmentList}>
                    <table>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Date of Birth</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Smith</td>
                                <td>01/01/2000</td>
                                <td>26</td>
                                <td>Male</td>
                                <td>25/03/2026</td>
                                <td>10:00 AM - 10:30 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PatientList
