import React from 'react'
import style from '../../Style/CreateAccount.module.css'

const CreateAccount = () => {
  return (
    <>
        <div className={style.container}>
            <div className={style.header}>
                <h1>DiaBuddy</h1>
                <p>Your Ultimate Diabetes Management Companion</p>
                <h2>Create Your Account</h2>
            </div>
            <div>
                <div className={style["error-msg"]}>
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

                    <button type="submit" className={`${style.button} ${style["button-primary"]}`}>Register</button>

                    <p className={style.loginLink}>Already have an account? <a href="/login">Login</a></p>
                    <p className={style.loginLink}>Want to go back? <a href="/">Home</a></p>

                </form>
            </div>
        </div>
    
    </>
  )
}

export default CreateAccount
