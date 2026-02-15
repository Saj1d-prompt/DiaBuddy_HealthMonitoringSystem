import React from 'react'
import styles from '../../Style/CreateAccount.module.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

const LoginForm = () => {
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm();
    const [error, setErrors] = React.useState(null);
    const { login } = React.useContext(AuthContext);

    const onSubmit = async (data) => {
        await fetch(`${import.meta.env.VITE_API_KEY}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.status === 200) {
                    const userInfo = {
                        name: result.name,
                        id: result.id,
                        token: result.token,
                        role: result.role,
                    }
                    localStorage.setItem('userInfo', JSON.stringify(userInfo));
                    login(userInfo);
                    if (result.role === 'patient') {
                        navigate('/onetimeinfoform');
                    } else if (result.role === 'doctor') {
                        navigate('/doctordashboard');
                    }else if (result.role === 'admin') {
                        navigate('/admindashboard');
                    }
                } else {
                    setErrors("Login failed. Please try again with Valid Credentials.");
                    setTimeout(() => {
                        setErrors(null);
                    }, 2000);
                }

            })
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Login</h1>
                </div>
                <div>
                    <div className={styles["error-msg"]}>
                        <p>{error}</p>
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
