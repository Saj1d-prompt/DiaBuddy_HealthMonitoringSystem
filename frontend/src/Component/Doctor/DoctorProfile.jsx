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
                <form>
                    <h3 className={styles.sectionTitle}>Academic & Professional</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Department</label>
                            <input type="text" name='department' value={profile.department} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Specialization</label>
                            <input type="text" name='specialization' value={profile.specialization} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Medical License Number</label>
                            <input type="text" name='license_number' value={profile.license_number} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Years of Experience</label>
                            <input type="text" name='experience' value={profile.experience} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Professional Biography</label>
                            <textarea name='bio' rows="3" value={profile.bio} readOnly></textarea>
                        </div>
                    </div>
                    <h3 className={styles.sectionTitle}>Education & Background</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Highest Degree</label>
                            <input type="text" name='highest_degree' value={profile.highest_degree} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Medical School</label>
                            <input type="text" name='medical_school' value={profile.medical_school} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Graduation Year</label>
                            <input type="text" name='graduation_year' value={profile.graduation_year} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Awards & Achievements</label>
                            <textarea name='awards' rows="3" value={profile.awards} readOnly></textarea>
                        </div>
                    </div>
                    <h3 className={styles.sectionTitle}>Clinic & Contact Details</h3>
                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Clinic Name</label>
                            <input type="text" name='clinic_name' value={profile.clinic_name} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name='phone_number' value={profile.phone_number} readOnly />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Clinic Address</label>
                            <textarea name='clinic_address' rows="3" value={profile.clinic_address} readOnly></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Consultation Hours</label>
                            <textarea name='consultation_hours' rows="3" value={profile.consultation_hours} readOnly></textarea>
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
