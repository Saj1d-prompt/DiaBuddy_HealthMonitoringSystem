import React, { useEffect } from 'react'
import styles from '../../Style/UserList.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const UserList = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUser();
    }, [])
    const fetchUser = async () => {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        try {
            const response = await fetch('http://localhost:8000/api/admin/userList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const result = await response.json();
            if(result.status === 200){
                setUsers(result.data);
            }
        } catch (error) {
            console.error('Error fetching user list:', error);
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>User List</h1>
                <div>
                    <label htmlFor="roleFilter">Filter by Role:</label>
                    <select id="roleFilter" className={styles.filterSelect} name="roleFilter">
                        <option value="all">All</option>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.userTable}>
                    <thead>
                        <tr>
                            <th>User Details</th>
                            <th>Role</th>
                            <th>Joined Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.userInfo}>
                                    <span className={styles.userName}>ABC</span>
                                    <span className={styles.userEmail}>abc@example.com</span>
                                </div>
                            </td>
                            <td>
                                <span>
                                    Patient
                                </span>
                            </td>
                            <td>2022-01-01</td>
                            <td style={{ display: 'flex', gap: '10px' }}>
                                <button className={styles.editButton}>Edit</button>
                                <button className={styles.deleteButton}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
