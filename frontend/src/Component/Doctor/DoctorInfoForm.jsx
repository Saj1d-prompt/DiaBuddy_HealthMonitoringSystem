import React from 'react'
import styles from '../../Style/DoctorInfo.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const DoctorInfoForm = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        await fetch(`${import.meta.env.VITE_API_KEY}/doctor/updateDoctorProfile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.status === 200) {
                    const updatedUserInfo = {
                        ...userInfo, is_profile_complete: true
                    }
                    localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
                    navigate('/doctordashboard');
                } else {
                    alert("Registration failed. Please try again with Valid Credentials.");
                }
            });

    }
    return (
        <div className={styles.container}>
            <form action="" className={styles.setupForm} onSubmit={handleSubmit(onSubmit)}>
                <h1>Doctor Information Form</h1>
                <p>Fill out the form below to get started</p>
                <div className={styles.section}>
                    <h2>Professional Details</h2>
                    <label htmlFor="department">Department</label>
                    <select id="department" {...register("department")} name="department" required >
                        <option value="">Select a department</option>
                        <option value="cardiology">Endocrinology</option>
                        <option value="neurology">Diabetology</option>
                        <option value="pediatrics">Nutrition</option>
                        <option value="orthopedics">Podiatry</option>
                        <option value="dermatology">Nephrology</option>
                        <option value="cardiology">Cardiology</option>
                    </select>
                    <label htmlFor="specialty">Specialization</label>
                    <input type="text" id="specialty" name="specialty" {...register("specialization")} required />
                    <label htmlFor="License">License Number</label>
                    <input type="text" id="License" name="License" {...register("licenseNumber")} required />
                    <label htmlFor="Experience">Years of Experience</label>
                    <input type="number" id="Experience" name="Experience" {...register("yearOfExperience")} required />
                    <label htmlFor="profBio">Professional Biography</label>
                    <textarea id="profBio" name="profBio" {...register("profBio")} />
                </div>
                <div className={styles.section}>
                    <h2>Education & Background</h2>
                    <label htmlFor="HighestDegree">Highest Degree</label>
                    <input type="text" id="HighestDegree" name="HighestDegree" {...register("highestDegree")} />
                    <label htmlFor="MedicalSchool">Medical School</label>
                    <input type="text" id="MedicalSchool" name="MedicalSchool" {...register("medicalSchool")} />
                    <label htmlFor="GraduationYear">Graduation Year</label>
                    <input type="number" id="GraduationYear" name="GraduationYear" {...register("gradYear")} />
                    <label htmlFor="Awards">Awards or Special Achievements(Optional)</label>
                    <textarea id="Awards" name="Awards" {...register("awards")}></textarea>
                </div>
                <div className={styles.section}>
                    <h2>Clinic & Contact Details</h2>
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input type="text" id="phoneNum" name="phoneNum" {...register("phoneNumber")} />
                    <label htmlFor="clinicName">Clinic Name</label>
                    <input type="text" id="clinicName" name="clinicName" {...register("clinicName")} />
                    <label htmlFor="clinicAddress">Full Clinic Address</label>
                    <textarea id="clinicAddress" name="clinicAddress" {...register("clinicAddress")} />
                    <label htmlFor="consultationHours">Consultation Days(in a Week)</label>
                    <textarea id="consultationHours" name="consultationHours" {...register("consultationHours")} />
                    <label htmlFor="fee">Consultation Fee</label>
                    <input type="text" name="fee" id="fee" {...register("fee")} />
                </div>
                <button type="submit" className={styles.submitBtn}>Submit Information</button>
            </form>
        </div>
    )
}
export default DoctorInfoForm
