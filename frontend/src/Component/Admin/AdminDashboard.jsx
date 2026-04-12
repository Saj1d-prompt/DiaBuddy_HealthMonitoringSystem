import React, { use, useEffect } from 'react'
import style from '../../Style/AdminDashboard.module.css'
import { useState } from 'react';
import { useRef } from 'react';
import Chart from 'chart.js/auto';


const AdminDashboard = () => {
  const [stats, setStats] = useState({
    doctors: 0,
    hospitals: 0,
    patients: 0
  });
  const [recentUsers, setRecentUsers] = useState();
  const [appointment, setAppointment] = useState({ labels: [], data: [] });
  const appointmentChart = useRef(null); 
  const chartInstance = useRef(null);
  const fetchStats = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try{
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/admin/getStatCount`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        setStats({
          doctors: result.data.doctorNumber,
          hospitals: result.data.hospitalNumber,
          patients: result.data.patientNumber
        });
      }
    }catch(error){
      console.error("Error fetching stats:", error);
    }
  }
  const fetchRecentUsers = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/admin/getRecentPatients`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        setRecentUsers(result.data);
      }
    }catch(error){
      console.error("Error fetching recent users:", error);
    }
  }
  const fetchAppointmentData = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/admin/getAppointmentData`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const result = await response.json();
      if (result.status === 200) {
        setAppointment(result);
      }
    }
    catch(error){
      console.error("Error fetching appointment data:", error);
    }
  }
  useEffect(() => {
    fetchStats();
    fetchRecentUsers();
    fetchAppointmentData();
  }, []);
  useEffect(() => {
        if (appointment.data.length === 0) return;

        const ctx = appointmentChart.current.getContext('2d');
        if (chartInstance.current) chartInstance.current.destroy();

        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: appointment.labels,
                datasets: [{
                    label: 'Bookings',
                    data: appointment.data,
                    backgroundColor: [
                        '#FFD700', 
                        '#FF8C00', 
                        '#4682B4', 
                        '#2C3E50' 
                    ],
                    borderRadius: 10,
                    barThickness: 60
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Most Appointment Booking Time Range' }
                },
                scales: {
                    y: { beginAtZero: true, grid: { display: false } },
                    x: { grid: { display: false } }
                }
            }
        });
    }, [appointment]);
  return (
    <div className={style.container}>
      <div className={style.statGrid}>
        <div className={style.statCard}>
          <h3>Total Doctors</h3>
          <p>{stats.doctors}</p>
        </div>
        <div className={style.statCard}>
          <h3>Total Hospitals</h3>
          <p>{stats.hospitals}</p>
        </div>
        <div className={style.statCard}>
          <h3>Total Patients</h3>
          <p>{stats.patients}</p>
        </div>
      </div>
      <div className={style.newUserTable}>
        <table>
          <caption>New Users (Less than 10 Days)</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.date_of_birth).toLocaleDateString('en-GB')}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={style.graphContainer}>
        <canvas ref={appointmentChart} style={{ width: '100%', height: '300px' }}></canvas>
      </div>
    </div>
  )
}

export default AdminDashboard
