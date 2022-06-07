import React, { useEffect, useState } from 'react';
import styles from './SignUp.module.css'
import {validate} from '../../helper/index';
import {Link} from 'react-router-dom'
 const SignUp = () => {
    const[data, SetData] = useState({
        name : '',
        email : '',
        password: '',
        confirmPassword : ''
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
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
        setErrors(validate(data, 'signup'));
    }, [data]);

    return (
        <div className={styles.screen}>
            <h1 className={styles.header}>SignUp</h1>
            <form onSubmit={submitHandler}>
                <div className={styles.item}>
                    <input
                        className= { errors.name && touched.name ? styles.hasError : styles.inputElement} 
                        name = 'name' 
                        type = 'text' 
                        value = {data.name} 
                        onChange = {changeHandler}
                        onFocus = { focusHandler }  
                        placeholder = "Name"
                    />
                    {errors.name && touched.name && <span className = {styles.error}>{errors.name}</span>}
                </div>
                <div className= {styles.item}>
                    <input 
                        className= { errors.email && touched.email ? styles.hasError : styles.inputElement} 
                        name ='email' 
                        type ='text' value = {data.email} 
                        onChange = {changeHandler}  
                        onFocus = { focusHandler }
                        placeholder = "Username@gmail.com"
                    />
                    {errors.email && touched.email && <span className = {styles.error}>{errors.email}</span>}
                </div>
                <div className = {styles.item}>
                    <input 
                        className= { errors.password && touched.password ? styles.hasError : styles.inputElement} 
                        name = 'password' 
                        type = 'password' 
                        value = {data.password}  
                        onChange = {changeHandler}
                        onFocus = { focusHandler } 
                        placeholder = "············"
                    />
                    {errors.password && touched.password && <span className = {styles.error}>{errors.password}</span>}
                </div>
                <div className = {styles.item}>
                    <input 
                        className= { errors.confirmPassword && touched.confirmPassword  ? styles.hasError : styles.inputElement} 
                        name = 'confirmPassword' 
                        type = 'password' 
                        value = {data.confirmPassword}  
                        onChange = {changeHandler} 
                        onFocus = { focusHandler }
                        placeholder = "············"
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span className = {styles.error}>{errors.confirmPassword}</span>}
                </div>
                <button className={styles.SignUp}>SignUp </button>
            </form>
            <div className={styles.footer}><Link to = '/login'>Login</Link></div>
        </div>
    );
};

export default SignUp;