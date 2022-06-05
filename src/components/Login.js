import React, { useEffect, useState } from 'react';
import styles from './SignUp.module.css';
import {validate} from '../helper/validation';
import {Link} from 'react-router-dom';

const Login = () => {
    const[data, SetData] = useState({
        email : '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        email: false,
        password: false,
    });

    const changeHandler = (element) => {
        SetData({
            ...data,
            [element.target.name] : element.target.value
        });
    }

    const focusHandler = (element) => {
        setTouched({
            ...touched,
            [element.target.name] : true
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(Object.keys(errors))
        if (!Object.keys(errors).length){
            console.log('You are signUp');}
        else{
            setTouched({
                name : errors.name && true,
                email : errors.email && true,
                password : errors.password && true,
                confirmPassword : errors.confirmPassword && true
            })
        }
    }
    useEffect( () => {
        setErrors(validate(data, 'login'));
    }, [data]);

    return (
        <div className={styles.screen}>
            <h1 className={styles.header}>Login</h1>
            <form onSubmit={submitHandler}>
                <div className= {styles.email}>
                    <input 
                        className= { errors.email && touched.email && styles.hasError} 
                        name ='email' 
                        type ='text' value = {data.email} 
                        onChange = {changeHandler}  
                        onFocus = { focusHandler }
                        placeholder = "Username@gmail.com"
                    />
                    {errors.email && touched.email && <span className = {styles.error}>{errors.email}</span>}
                </div>
                <div className = {styles.password}>
                    <input 
                        className= { errors.password && touched.password && styles.hasError} 
                        name = 'password' 
                        type = 'password' 
                        value = {data.password}  
                        onChange = {changeHandler}
                        onFocus = { focusHandler } 
                        placeholder = "············"
                    />
                    {errors.password && touched.password && <span className = {styles.error}>{errors.password}</span>}
                </div>
                <button className={styles.SignUp}>Login </button>
            </form>
            <div className={styles.footer}><Link to ='/signup'>SignUp</Link></div>
        </div>
    );
};

export default Login;