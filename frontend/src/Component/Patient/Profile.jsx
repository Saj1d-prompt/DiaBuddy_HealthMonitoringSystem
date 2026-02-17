import React, { useEffect, useState } from 'react'
import styles from '../../Style/Profile.module.css'

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    number: '',
    gender: '',
    address: '',
    height: '',
    weight: '',
    bloodGroup: '',
  })

  useEffect(() => {
    fetchProfile();
  }, [])
  const fetchProfile = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const token = userInfo.token;
    try{
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/getPersonalInfo`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      const result = await res.json();
      if(result.status === 200){
        setProfile(result.data);
      }
    }catch(error){
      console.error("Error fetching profile data:", error);
    }
  }
  const handleToggle = () => {
    setEdit(!edit);
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1>Profile</h1>
            <p>Manage Your personal and Health Details</p>
          </div>
          <button onClick={handleToggle} className={styles.editButton}>Edit Profile</button>
        </div>

        <form action="">
          <h3 className={styles.sectionTitle}>Personal Information</h3>
          <div className={styles.grid}>

            <div className={styles.formGroup}>
              <label htmlFor="">Phone Number</label>
              <input type="text" name='number' value={profile.number} readOnly />
            </div>

            {/* <div className={styles.formGroup}>
              <label htmlFor="">Gender</label>
              <select name="gender" id="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div> */}
              <div className={styles.formGroup}>
                <label htmlFor="gender">Gender</label>
                <div className={styles.viewValue}>{profile.gender}</div>
              </div>

            <div className={styles.formGroup}>
              <label htmlFor="">Address</label>
              <textarea type="text" name='address' rows="3" value={profile.address} readOnly />
            </div>

          </div>

          <h3 className={styles.sectionTitle}>Health Information</h3>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label htmlFor="">Height (cm)</label>
              <input type="text" name='height' value={profile.height} readOnly />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="">Weight (kg)</label>
              <input type="text" name='weight' value={profile.weight} readOnly />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="bloodGroup">Blood Group</label>
              <div className={styles.viewValue}>{profile.bloodGroup}</div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="diabetesType">Diabetes Type</label>
              <div className={styles.viewValue}>{profile.diabetesType || 'None'}</div>
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Your BMI</label>
              <input type="text" className={styles.bmiDisplay} readOnly />
            </div>
          </div>
          <button type='submit' className={styles.saveButton}>Save Changes</button>
        </form >

      </div >
    </div >
  )
}

export default Profile
