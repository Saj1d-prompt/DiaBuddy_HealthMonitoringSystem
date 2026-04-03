import React from 'react'
import styles from '../../Style/Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../Images/DiaBuddy.png'

const PatientNavbar = () => {
    return (
        <div>
            <div>
                <Link to="/"><img className={styles.logo} src={logo} alt="DiaBuddy Logo" /></Link>
            </div>
            <nav>

            </nav>
        </div>
    )
}

export default PatientNavbar
