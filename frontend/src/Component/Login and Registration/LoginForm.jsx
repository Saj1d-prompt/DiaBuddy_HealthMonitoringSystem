import React from 'react'
import styles from '../../Style/CreateAccount.module.css'

const LoginForm = () => {
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm();
    const [error, setErrors] = React.useState(null);

    const onSubmit = async (data) => {
        
    }
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
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" {...register("email")} id="email" name="email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")} id="password" name="password" required />

                        <button type="submit" className={`${styles.button} ${styles["button-primary"]}`}>Login</button>

                        <p className={styles.loginLink}>Don't have an account? <a href="/register">Register</a></p>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LoginForm
