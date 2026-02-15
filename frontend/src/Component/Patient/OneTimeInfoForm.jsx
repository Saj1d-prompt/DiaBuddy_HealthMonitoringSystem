import React, { useEffect } from 'react'
import styles from '../../Style/OneTimeInfo.module.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OneTimeInfoForm = () => {
    const { register, handleSubmit, watch, setValue } = useForm();
    const navigate = useNavigate();
    const [bmi, setBmi] = useState("");
    const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    const height = watch("height");
    const weight = watch("weight");

    useEffect(() => {
        if (height<0 || weight<0) {
            setBmi("Invalid height or weight");
        }else if (height>0 && weight>0) {
            const heightInMeters = height / 100;
            const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(calculatedBmi);
        }
    }), [height, weight];


    const onSubmit = async (data) => {
        //code
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Complete Your Profile</h1>
                <p>Help us personalize your health journey</p>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.sectionTitle}>Personal Information</h3>

                <div className={styles.grid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="number">Phone Number</label>
                        <input type="tel" {...register("number")} id="number" name="number" placeholder="Enter your phone number" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" {...register("gender")}>
                            <option value="">Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Current Address</label>
                        <textarea id="address" {...register("address")} name="address" placeholder="Enter your current address" rows="3"></textarea>
                    </div>
                </div>

                <h1 className={styles.sectionTitle}>Health Information</h1>

                <div className={styles.grid}>

                    <div className={styles.formGroup}>
                        <label htmlFor="height">Height (cm)</label>
                        <input type="number" step="0.01" {...register("height")} id="height" name="height" placeholder="Enter your height in cm" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="weight">Weight (kg)</label>
                        <input type="number" step="0.01" {...register("weight")} id="weight" name="weight" placeholder="Enter your weight in kg" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="bloodGroup">Blood Group</label>
                        <select id="bloodGroup" name="bloodGroup" {...register("bloodGroup")}>
                            <option value="">Select your blood group</option>
                            {bloodGroup.map((group) => (
                                <option key={group} value={group}>{group}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="diabetesType">Type of Diabetes</label>
                        <select id="diabetesType" name="diabetesType" {...register("diabetesType")}>
                            <option value="">Select diabetes type</option>
                            <option value="type1">Type 1 Diabetes</option>
                            <option value="type2">Type 2 Diabetes</option>
                            <option value="gestational">Gestational Diabetes</option>
                            <option value="prediabetes">Pre-diabetes</option>
                        </select>
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label>Your Auto-calculated BMI</label>
                        <input type="text" value={bmi} className={styles.bmiDisplay} readOnly />
                    </div>
                </div>
                <button type="submit" className={styles.submitBtn}>Save Information</button>

            </form>
        </div>
    )
}

export default OneTimeInfoForm
