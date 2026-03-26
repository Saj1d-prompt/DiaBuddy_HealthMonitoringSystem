import React, { useEffect } from 'react'
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
    useEffect(() => {
            fetchAppointmentList();
        }, []);
    return (
        <div>
            <div className={styles.container}>
                <h2>Upcoming Appointments</h2>
                <div className={styles.appointmentList}>
                    <table>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Smith</td>
                                <td>26</td>
                                <td>Male</td>
                                <td>25/03/2026</td>
                                <td>10:00 AM - 10:30 AM</td>
                            </tr>
                            {appointmentList.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.patient.name}</td>
                                    <td>{Math.floor((new Date() - new Date(appointment.patient.date_of_birth)) / (365.25 * 24 * 60 * 60 * 1000))}</td>
                                    <td>{appointment.patient.person.gender}</td>
                                    <td>{appointment.appointment_date}</td>
                                    <td>{appointment.start_time} - {appointment.end_time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PatientList
