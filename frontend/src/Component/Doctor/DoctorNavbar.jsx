import React from 'react'
import styles from '../../Style/Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../Images/DiaBuddy.png'
import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const DoctorNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/');
    }
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles["nav-container"]}>
                    <Link to="/"><img className={styles.logo} src={logo} alt="DiaBuddy Logo" /></Link>
                    
                    <ul className={styles["nav-links"]}>
                        <li><Link to="/doctordashboard">Home</Link></li>
                        <li><Link to="/schedule">Add Schedule</Link></li>
                        <li><Link to="/patientlist">Patient List</Link></li>
                        <li><Link to="/doctorProfile">Profile</Link></li>
                    </ul>

                    <div>
                        <button onClick={handleLogout} className={`${styles.btn} ${styles["btn-primary"]}`}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default DoctorNavbar
