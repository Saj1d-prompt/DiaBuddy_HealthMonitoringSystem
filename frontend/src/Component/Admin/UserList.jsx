import React, { useEffect } from 'react'
import styles from '../../Style/UserList.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const UserList = () => {
    const [showModal, setShowModal] = useState({ active: false, id: null, name: '' });
    const [user, setUsers] = useState([]);
    useEffect(() => {
        fetchUser();
    }, [])
    const triggerModal = (id, name) => {
        setShowModal({ active: true, id: id, name: name });
    }

    const closeModal = () => {
        setShowModal({ active: false, id: null, name: '' });
    }
    const fetchUser = async () => {
        const users = JSON.parse(localStorage.getItem('userInfo'));

        try {
            const response = await fetch('http://localhost:8000/api/admin/userList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${users.token}`
                }
            });
            const result = await response.json();
            if (result.status === 200) {
                setUsers(result.data);
            }
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    }

    const confirmDelete = async () => {
        const users = JSON.parse(localStorage.getItem('userInfo'));
        try {

        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    return (
        <div className={styles.container}>
            {showModal.active && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Confirm Delete</h2>
                        <p>Are you sure you want to delete <strong>{showModal.name}</strong>? This action is permanent.</p>
                        <div className={styles.modalButtons}>
                            <button className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
                            <button className={styles.confirmDeleteBtn} onClick={confirmDelete}>Yes, Delete</button>
                        </div>
                    </div>
                </div>
            )}

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
                                <td>
                                    <button className={styles.deleteButton} onClick={() => triggerModal(user.id, user.name)}>Delete</button>
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
