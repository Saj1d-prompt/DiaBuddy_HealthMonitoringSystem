import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Home.css'
import logo from '../Images/DiaBuddy.png'


const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/"><img className='logo' src={logo} alt="DiaBuddy Logo" /></Link>

                    <ul className="nav-links">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="auth-buttons">
                        <Link to="/login" className="btn btn-outline">Login</Link>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
