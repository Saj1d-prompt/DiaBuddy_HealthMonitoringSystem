import React from 'react'
import styles from '../../Style/CreateDoctor.module.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const CreateDoctor = () => {
    const { handleSubmit, register, reset } = useForm();
    const [error, setError] = useState(null);
    const onSubmit = async (data) => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        await fetch(`${import.meta.env.VITE_API_KEY}/admin/addDoctor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.status === 200) {
                    setError("Doctor added successfully.");
                    reset();
                    setTimeout(() => {
                        setError(null);
                    }, 2000);
                } else {
                    setError("Registration failed. Please try again with Valid Credentials.");
                    setTimeout(() => {
                        setError(null);
                    }, 2000);
                }
            })
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add New Doctor</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter doctor's name" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter doctor's email" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="date_of_birth">Date of Birth</label>
                    <input type="date" id="date_of_birth" name="date_of_birth" required />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className={styles.submitBtn}>Add Doctor</button>
            </form>
        </div>
    )
}

export default CreateDoctor
