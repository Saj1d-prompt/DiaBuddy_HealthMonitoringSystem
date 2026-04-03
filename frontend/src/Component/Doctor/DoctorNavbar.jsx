import React from 'react'
import styles from '../../Style/Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../Images/DiaBuddy.png'

const DoctorNavbar = () => {
    const handleLogout = () => {
        
    }
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles["nav-container"]}>
                    <Link to="/"><img className={styles.logo} src={logo} alt="DiaBuddy Logo" /></Link>

                    
                    <div>
                        <button onClick={handleLogout} className={`${styles.btn} ${styles["btn-primary"]}`}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default DoctorNavbar
