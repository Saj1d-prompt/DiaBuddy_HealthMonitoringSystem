import React, { useEffect } from 'react'
import styles from '../../Style/SearchHospital.module.css'
import { useState } from 'react';

const SearchHospital = () => {
    const [hospital, setHospital] = useState([]);
    const [filter, setFilter] = useState({
        type: '',
        city: ''
    });
    const fetchHospital = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        try {
            const res = await fetch(`${import.meta.env.VITE_API_KEY}/searchHospital?type=${filter.type}&city=${filter.city}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`,
                    'Content-Type': 'application/json'
                }
            })
            const result = await res.json();
            if (result.status === 200) {
                setHospital(result.data);
            }
        } catch (error) {
            console.error("Error fetching hospital data:", error);
        }
    }

    useEffect(() => {
        fetchHospital();
    }, [filter])
    
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
                        {hospital.map((hosp) => (
                            <div key={hosp.id} className={styles.hospitalCard}>
                                <h3>{hosp.name}</h3>
                                <span>Type: {hosp.type}</span>
                                <p>Address: {hosp.address}</p>
                                <p>Contact: {hosp.phone}</p>
                                <p>email: {hosp.email}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchHospital
