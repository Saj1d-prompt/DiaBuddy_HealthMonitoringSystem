import React from 'react'
import styles from '../../Style/Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../Images/DiaBuddy.png'

const PatientNavbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles["nav-container"]}>
                    <Link to="/"><img className={styles.logo} src={logo} alt="DiaBuddy Logo" /></Link>

                    <ul className={styles["nav-links"]}>
                        <li><Link to="/patientdashboard">Home</Link></li>
                        <li><Link to="/bloodsugarreading">Blood Sugar Reading</Link></li>
                        <li><Link to="/searchhospital">Find a Hospital</Link></li>
                        <li><Link to="/searchdoctor">Find a Doctor</Link></li>
                        <li><Link to="/viewreports">My Reports</Link></li>
                        <li><Link to="/viewprescriptions">My Prescriptions</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default PatientNavbar
