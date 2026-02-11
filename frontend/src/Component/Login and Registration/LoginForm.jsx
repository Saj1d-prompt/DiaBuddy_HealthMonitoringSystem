import React from 'react'
import '../../Style/CreateAccount.css'

const LoginForm = () => {
    return (
        <div>
            <div className='container'>
                <div className="header">
                    <h1>Login</h1>
                </div>
                <div>
                    <div className='error-msg'>
                        <p></p>
                    </div>
                    <form action="">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />

                        <button type="submit" className="button button-primary">Login</button>

                        <p className='loginLink'>Don't have an account? <a href="/register">Register</a></p>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LoginForm
