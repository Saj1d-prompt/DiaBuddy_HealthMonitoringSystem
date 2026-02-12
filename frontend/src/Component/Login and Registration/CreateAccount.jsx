import React from 'react'
import style from '../../Style/CreateAccount.module.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {
    const { handleSubmit, register} = useForm();
    const [error, setErrors] = React.useState(null);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await fetch(`${import.meta.env.VITE_API_KEY}/register`, {
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
                    navigate('/login');
                } else {
                    setErrors("Registration failed. Please try again with Valid Credentials.");
                    navigate('/register');
                }
            })
        }
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
                        <p>{error}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" {...register("name")} id="name" name="name" required />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" {...register("email")} id="email" name="email" required />

                        <label htmlFor="date_of_birth">Date of Birth</label>
                        <input type="date" {...register("date_of_birth")} id="date_of_birth" name="date_of_birth" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" {...register("password")} id="password" name="password" required />

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
