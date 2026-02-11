import React from 'react'
import styles from '../../Style/CreateAccount.module.css'

const LoginForm = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Login</h1>
                </div>
                <div>
                    <div className={styles["error-msg"]}>
                        <p></p>
                    </div>
                    <form action="">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />

                        <button type="submit" className={`${styles.button} ${styles["button-primary"]}`}>Login</button>

                        <p className={styles.loginLink}>Don't have an account? <a href="/register">Register</a></p>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LoginForm
