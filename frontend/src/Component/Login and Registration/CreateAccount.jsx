import React from 'react'
import '../../Style/CreateAccount.css'

const CreateAccount = () => {
  return (
    <>
        <div className="container">
            <div className="header">
                <h1>DiaBuddy</h1>
                <p>Your Ultimate Diabetes Management Companion</p>
                <h2>Create Your Account</h2>
            </div>
            <div>
                <div className='error-msg'>
                    <p></p>
                </div>
                <form action="">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit" className="button button-primary">Register</button>

                    <p className='loginLink'>Already have an account? <a href="/login">Login</a></p>
                    <p className='loginLink'>Want to go back? <a href="/">Home</a></p>

                </form>
            </div>
        </div>
    
    </>
  )
}

export default CreateAccount
