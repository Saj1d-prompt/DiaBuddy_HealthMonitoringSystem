import React from 'react'
import BloodSugarReadings from './BloodSugarReading'
import ViewPrescription from './ViewPrescription'
import PatientNavbar from './PatientNavbar'
import styles from '../../Style/PatientDashboard.module.css'
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PatientDashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '2026-04-01',
          '2026-04-02',
          '2026-04-03',
          '2026-04-04',
          '2026-04-05'
        ],
        datasets: [
          {
            label: 'Blood Sugar (mg/dL)',
            data: [110, 145, 130, 160, 120],
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true
      }
    });
    return () => {
      chartInstance.current.destroy();
    };
  }, []);
  return (
    <div>
      <div className={styles.personalInfo}>
        <h2>Mr. X</h2>
        <div className={styles.InfoContainer}>
          <div>
            <p>Age: 45</p>
            <p>Gender: Male</p>
            <p>address: Basundhara R/A, Dhaka, Bangladesh</p>
          </div>
          <div>
            <p>Weight: 70 kg</p>
            <p>Height: 175 cm</p>
            <p>BMI: 22.9</p>
            <p>Blood Group: A+</p>
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
      <div style={{ width: '800px', margin: '50px auto' }}>
        <h2 style={{textAlign:'center'}}>Blood Sugar Level</h2>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  )
}

export default PatientDashboard
