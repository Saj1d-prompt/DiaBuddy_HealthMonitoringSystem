import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../Style/Home.module.css'
import hero from '../Images/heroPic.webp'

const HeroSection = () => {
    return (
        <div>
            <div className={style["hero-section"]}>
                <div className={`${style.container} ${style["hero-content"]}`}>
                    <h1 className={style["hero-title"]}>
                        Complete Diabetes Care, <br />
                        <span className={style.highlight}>Right at Your Fingertips.</span>
                    </h1>
                    <p className={style["hero-text"]}>
                        Track your blood sugar, connect with specialized doctors, manage prescriptions <br />and find the right diet all in one integrated platform.
                    </p>
                    <div className={style["hero-buttons"]}>
                        <Link className={`${style.btn} ${style["btn-primary"]}`} to="/register" style={{ marginRight: '15px' }}>Get Started</Link>
                        <a className={`${style.btn} ${style["btn-outline"]}`} href="#features">Learn More</a>
                    </div>
                </div>
                <div className={style["hero-image"]}>
                    <img src={hero} alt="Diabuddy Dashboard" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
