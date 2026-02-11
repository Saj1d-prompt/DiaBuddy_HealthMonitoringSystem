import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../Style/Home.module.css'
import logo from '../Images/DiaBuddy.png'


const Header = () => {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style["nav-container"]}>
                    <Link to="/"><img className={style.logo} src={logo} alt="DiaBuddy Logo" /></Link>

                    <ul className={style["nav-links"]}>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className={style["auth-buttons"]}>
                        <Link to="/login" className={`${style.btn} ${style["btn-outline"]}`}>Login</Link>
                        <Link to="/register" className={`${style.btn} ${style["btn-primary"]}`}>Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
