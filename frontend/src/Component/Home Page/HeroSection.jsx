import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Home.css'
import hero from '../Images/heroPic.webp'

const HeroSection = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="container hero-content">
                    <h1 className="hero-title">
                        Complete Diabetes Care, <br />
                        <span className="highlight">Right at Your Fingertips.</span>
                    </h1>
                    <p className="hero-text">
                        Track your blood sugar, connect with specialized doctors, manage prescriptions <br />and find the right diet all in one integrated platform.
                    </p>
                    <div className="hero-buttons">
                        <Link className="btn btn-primary" to="/register" style={{ marginRight: '15px' }}>Get Started</Link>
                        <a className="btn btn-outline" href="#features">Learn More</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="Diabuddy Dashboard" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
