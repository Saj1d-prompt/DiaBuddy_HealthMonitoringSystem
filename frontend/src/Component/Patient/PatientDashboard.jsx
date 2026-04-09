import React from 'react'
import BloodSugarReadings from './BloodSugarReading'
import ViewPrescription from './ViewPrescription'
import PatientNavbar from './PatientNavbar'
import styles from '../../Style/PatientDashboard.module.css'
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useState } from 'react';

const PatientDashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [bsrData, setBsrData] = useState({});
  const [info, setInfo] = useState();
  const [doctors, setDoctors] = useState();

  const colorMap = {
    "Fast": "#3498db",
    "Before Meal": "#e67e22",
    "After Meal": "#2ecc71",
    "Bedtime": "#9b59b6",
    "Random": "#f1c40f",
    "Exercise": "#e74c3c"
  };

  const fetchBSRData = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/getPatientBSR`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      const data = await response.json();
      if (data.status == 200) {
        setBsrData(data.data);
      }
    } catch (error) {
      console.error("Error fetching BSR data:", error);
    }
  }

  useEffect(() => {
    fetchBSRData();
  }, []);

  useEffect(() => {
    if (Object.keys(bsrData).length === 0) return;

    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current) chartInstance.current.destroy();

    const allDates = [...new Set(Object.values(bsrData).flat().map(r =>
      new Date(r.reading_time).toLocaleDateString()
    ))].sort((a, b) => new Date(a) - new Date(b));

    const datasets = Object.keys(bsrData).map(category => ({
      label: category,
      data: allDates.map(date => {
        // Find the reading for this specific date
        const reading = bsrData[category].find(r =>
          new Date(r.reading_time).toLocaleDateString() === date
        );
        return reading ? reading.glucose_level : null;
      }),
      borderColor: colorMap[category] || "#000",
      backgroundColor: `${colorMap[category]}22`,
      tension: 0.4,
      fill: false,
      spanGaps: true
    }));

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: allDates,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          title: { display: true, text: 'Combined Blood Sugar Trends' }
        },
        scales: {
          y: { title: { display: true, text: 'mg/dL' } }
        }
      }
    });

    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, [bsrData]);

  const fetchPatientInfo = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/getPatientInfo`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      const data = await response.json();
      if (data.status == 200) {
        setInfo(data.data);
      }
    } catch (error) {
      console.error("Error fetching patient info:", error);
    }
  }
  useEffect(() => {
    fetchPatientInfo();
  }, []);

  const calculateAge = (dateOfBirth) => {
    return Math.floor((new Date() - new Date(dateOfBirth)) / (365.25 * 24 * 60 * 60 * 1000));
  };
  const calculateBMI = (weight, height) => {
    if (height <= 0 || weight <= 0) return "Invalid height or weight";
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  }

  const fetchDoctors = async () => {
    try{
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/getTopDoctors`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userInfo.token}`
        }
      });
      const data = await response.json();
      if (data.status == 200) {
        setDoctors(data.data);
      }
    }catch(error){
      console.error("Error fetching doctors:", error);
    }
  }
  return (
    <div>
      <div className={styles.personalInfo}>
        <h2>{info?.name}</h2>
        <div className={styles.InfoContainer}>
          <div>
            <p>Age: {calculateAge(info?.date_of_birth)}</p>
            <p>Gender: {info?.gender}</p>
            <p>address: {info?.address}</p>
          </div>
          <div>
            <p>Weight: {info?.weight} kg</p>
            <p>Height: {info?.height} cm</p>
            <p>BMI: {calculateBMI(info?.weight, info?.height)}</p>
            <p>Blood Group: {info?.blood_group}</p>
          </div>
        </div>
      </div>
      <div className={styles.containerFlex}>
        <div className={styles.leftContainer}>
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Specialization</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.contact}</td>
                </tr>
              ))}
              <tr>
                <td>Dr. X</td>
                <td>Endocrinology</td>
                <td>12345</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.rightContainer}>
          <table>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Address</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>City Hospital</td>
                <td>Dhaka</td>
                <td>67890</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.dashboardContainer}>
        <div className={styles.chartWrapper}>
          <h2>Blood Sugar Level (Multi-Category)</h2>
          <div style={{ height: '450px', width: '100%' }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
