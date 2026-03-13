import React from 'react'
import styles from '../../Style/Profile.module.css'
import { useEffect, useState } from 'react';

const DoctorProfile = () => {
    const [edit, setEdit] = useState(false);
    const [profile, setProfile] = useState({
        department: '',
        specialization: '',
        licenseNumber: '',
        yearOfExperience: '',
        profBio: '',
        highestDegree: '',
        medicalSchool: '',
        gradYear: '',
        awards: '',
        clinicName: '',
        consultationHours: '',
        phoneNumber: '',
        clinicAddress: '',
        fee: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    }
    useEffect(() => {
        fetchProfile();
    }, [])
    const handleToggle = () => {
        setEdit(!edit);
    }
    const fetchProfile = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        try {
            const res = await fetch(`${import.meta.env.VITE_API_KEY}/doctor/getDocProfileInfo`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`,
                    'Content-Type': 'application/json'
                }
            })
            const result = await res.json();
            if (result.status === 200) {
                setProfile(result.data);
            }
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    }
    const handleSubmit = async (e) => {
        //code
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1>Doctor Profile</h1>
                        <p>Update your medical credentials and clinic information</p>
                    </div>
                    <button onClick={handleToggle} className={styles.editButton}
                        style={{ backgroundColor: edit ? '#64748b' : '#2563eb' }}>{edit ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <h3 className={styles.sectionTitle}>Academic & Professional</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Department</label>
                            {edit ? (
                                <select id="department" onChange={handleChange} name="department" required >
                                    <option value="">Select a department</option>
                                    <option value="cardiology">Endocrinology</option>
                                    <option value="neurology">Diabetology</option>
                                    <option value="pediatrics">Nutrition</option>
                                    <option value="orthopedics">Podiatry</option>
                                    <option value="dermatology">Nephrology</option>
                                    <option value="cardiology">Cardiology</option>
                                </select>
                            ) : (
                                <input type="text" name='department' value={profile.department} readOnly />
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Specialization</label>
                            {edit ? (
                                <input type="text" name='specialization' value={profile.specialization} onChange={handleChange} />
                            ) : (
                                <input type="text" name='specialization' value={profile.specialization} readOnly />
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Medical License Number</label>
                            <input type="text" name='licenseNumber' value={profile.licenseNumber} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Years of Experience</label>
                            {edit ? (
                                <input type="number" name='yearOfExperience' value={profile.yearOfExperience} onChange={handleChange} />
                            ) : (
                                <input type="text" name='yearOfExperience' value={profile.yearOfExperience} readOnly />
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Professional Biography</label>
                            {edit ? (
                                <textarea name='profBio' rows="3" value={profile.profBio} onChange={handleChange}></textarea>
                            ) : (
                                <textarea name='profBio' rows="3" value={profile.profBio} readOnly></textarea>
                            )}

                        </div>
                    </div>
                    <h3 className={styles.sectionTitle}>Education & Background</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Highest Degree</label>
                            {edit ? (
                                <input type="text" name='highestDegree' value={profile.highestDegree} onChange={handleChange} />
                            ) : (
                                <input type="text" name='highestDegree' value={profile.highestDegree} readOnly />
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Medical School</label>
                            {edit ? (
                                <input type="text" name='medicalSchool' value={profile.medicalSchool} onChange={handleChange} />
                            ) : (
                                <input type="text" name='medicalSchool' value={profile.medicalSchool} readOnly />
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Graduation Year</label>
                            {edit ? (
                                <input type="number" name='gradYear' value={profile.gradYear} onChange={handleChange} />
                            ) : (
                                <input type="text" name='gradYear' value={profile.gradYear} readOnly />
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Awards & Achievements</label>
                            {edit ? (
                                <textarea name='awards' rows="3" value={profile.awards} onChange={handleChange}></textarea>
                            ) : (
                                <textarea name='awards' rows="3" value={profile.awards} readOnly></textarea>
                            )}
                        </div>
                    </div>
                    <h3 className={styles.sectionTitle}>Clinic & Contact Details</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Clinic Name</label>
                            <input type="text" name='clinicName' value={profile.clinicName} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name='phoneNumber' value={profile.phoneNumber} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Clinic Address</label>
                            <textarea name='clinicAddress' rows="3" value={profile.clinicAddress} readOnly></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Consultation Hours</label>
                            <textarea name='consultationHours' rows="3" value={profile.consultationHours} readOnly></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Consultation Fee</label>
                            <input type="text" name='fee' value={profile.fee} readOnly />
                        </div>
                    </div>
                    <button type='submit' className={styles.saveButton}>Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default DoctorProfile
