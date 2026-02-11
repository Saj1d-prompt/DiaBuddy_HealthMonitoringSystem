import React from 'react'
import '../../Style/Home.css'

const Features = () => {
    return (
        <div>
            <div className="features">
                <div className="section-header">
                    <h2>Why Choose DiaBuddy?</h2>
                    <p>It has everything you need to manage your health effectively.</p>
                </div>
                <div className="features-box">
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Smart Monitoring</h3>
                        <p>Log daily blood sugar readings and visualize your health trends with interactive charts.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👨‍⚕️</div>
                        <h3>Expert Doctors</h3>
                        <p>Search and apply to specialized doctors. Get prescriptions and dietary advice directly.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💊</div>
                        <h3>Medicine Tracker</h3>
                        <p>Never miss a dose. View your active prescriptions and get reminders for your medication.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
