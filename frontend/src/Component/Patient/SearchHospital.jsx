import React from 'react'
import styles from '../../Style/SearchHospital.module.css'
import { useState } from 'react';

const SearchHospital = () => {
    const [hospital, setHospital] = useState([]);
    const [filter, setFilter] = useState({
        type: '',
        city: ''
    });
    const fetchHospital = async () => {
        //code
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Find a Health Center</h1>
                    <div className={styles.searchBox}>
                        <select value={filter.type} onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
                            <option value="">Select Health Center Type</option>
                            <option value="hospital">Hospital</option>
                            <option value="diagnosis_center">Diagnosis Center</option>
                        </select>
                        <input type="text" value={filter.city} onChange={(e) => setFilter({ ...filter, city: e.target.value })} placeholder="Enter city" />
                    </div>
                    <div className={styles.hospitalList}>
                        <div className={styles.hospitalCard}>
                            <h3>A Medical Hospital</h3>
                            <span>Type: Hospital</span>
                            <p>Address: Dhaka Bangladesh</p>
                            <p>Contact: 0123456789</p>
                            <p>email: example@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchHospital
