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
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default PatientNavbar
