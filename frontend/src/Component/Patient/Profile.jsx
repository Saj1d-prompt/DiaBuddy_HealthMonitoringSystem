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
    blood_group: '',
    diabetes_type: '',
    bmi: '',
  })

  useEffect(() => {
    fetchProfile();
  }, [])
  const fetchProfile = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const token = userInfo.token;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_KEY}/getPersonalInfo`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
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
  const handleToggle = () => {
    setEdit(!edit);
  }
  useEffect(() => {
        if (profile.height > 0 && profile.weight > 0) {
            const bmiValue = (profile.weight / ((profile.height / 100) ** 2)).toFixed(2);
            setProfile(prev => ({ ...prev, bmi: bmiValue }));
        }
    }, [profile.height, profile.weight])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const token = userInfo.token;
        try {
            const res = await fetch(`${import.meta.env.VITE_API_KEY}/updatePersonalInfo`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            })
            const result = await res.json();
            if (result.status === 200) {
                setEdit(false);
                fetchProfile();
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
            <h1>Profile</h1>
            <p>Manage Your personal and Health Details</p>
          </div>
          <button onClick={handleToggle} className={styles.editButton}
            style={{ backgroundColor: edit ? '#64748b' : '#2563eb' }}>{edit ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <h3 className={styles.sectionTitle}>Personal Information</h3>
          <div className={styles.grid}>

            <div className={styles.formGroup}>
              <label htmlFor="">Phone Number</label>
              {edit ? (
                <input type="text" name='number' value={profile.number} onChange={handleChange} />
              ) : (
                <input type="text" name='number' value={profile.number} readOnly />
              )}
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
              {edit ? ( <select name="gender" id="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select> ) : ( <div name = "gender" className={styles.viewValue}>{profile.gender}</div> )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="">Address</label>
              {edit ? (
                <textarea name='address' rows="3" value={profile.address} onChange={handleChange}></textarea>
              ) : (
                <textarea type="text" name='address' rows="3" value={profile.address} readOnly />
              )}
            </div>
          </div>

          <h3 className={styles.sectionTitle}>Health Information</h3>
          <div className={styles.grid}>
            <div className={styles.formGroup}>
              <label htmlFor="">Height (cm)</label>
              {edit ? (
                <input type="text" name='height' value={profile.height} onChange={handleChange} />
              ) : (
                <input type="text" name='height' value={profile.height} readOnly />
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="">Weight (kg)</label>
              {edit ? (
                <input type="text" name='weight' value={profile.weight} onChange={handleChange} />
              ) : (
                <input type="text" name='weight' value={profile.weight} readOnly />
              )}
             </div>
            <div className={styles.formGroup}>
              <label htmlFor="blood_group">Blood Group</label>
              <div name = "blood_group" className={styles.viewValue}>{profile.blood_group}</div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="diabetes_Type">Diabetes Type</label>
              <div name = "diabetes_Type" className={styles.viewValue}>{profile.diabetes_type}</div>
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Your BMI</label>
              <input type="text" className={styles.bmiDisplay} value={profile.bmi} readOnly />
            </div>
          </div>
            {edit && (
              <button type='submit' className={styles.saveButton}>Save Changes</button>
            )
            }
        </form >

      </div >
    </div >
  )
}

export default Profile
