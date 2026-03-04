import React, { useEffect } from 'react'
import styles from '../../Style/UserList.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const UserList = () => {
    const navigate = useNavigate();
    const [user, setUsers] = useState([]);
    useEffect(() => {
        fetchUser();
    }, [])
    const fetchUser = async () => {
        const users = JSON.parse(localStorage.getItem('userInfo'));
        if (!users?.token) {
        console.log("No token found");
        return;
    }
        try {
            const response = await fetch('http://localhost:8000/api/admin/userList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${users.token}`
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
                        {user.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.userInfo}>
                                    <span className={styles.userName}>{user.name}</span>
                                    <span className={styles.userEmail}>{user.email}</span>
                                </div>
                            </td>
                            <td>
                                <span className={`${styles.roleBadge} ${styles[user.role.toLowerCase()]}`}>
                                    {user.role}
                                </span>
                            </td>
                            <td>{new Date(user.created_at).toLocaleDateString()}</td>
                            <td style={{ display: 'flex', gap: '10px' }}>
                                <button className={styles.editButton}>Edit</button>
                                <button className={styles.deleteButton}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
