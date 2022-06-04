import React, { useEffect, useState } from 'react';
import styles from './SignUp.module.css'
import {validate} from '../helper/validation'
const SignUp = () => {
    const[data, SetData] = useState({
        name : '',
        email : '',
        password: '',
        confirmPassword : ''
    });
    const [errors, setErrors] = useState({});

    const changeHandler = (element) => {
        SetData({
            ...data,
            [element.target.name] : element.target.value
        });
    }

    useEffect( () => {
        setErrors(validate(data));
        console.log(errors)
    }, [data]);

    return (
        <div className={styles.screen}>
            {/* <form> */}
                <div className={styles.name}>
                    <input name='name' type='text' value={data.name} onChange={changeHandler}  placeholder="Name"/>
                    <span className={styles.error}>{errors.name ?? ''}</span>
                </div>
                <div className={styles.email}>
                    <input name='email' type='text' value={data.email} onChange={changeHandler}  placeholder="Username@gmail.com"/>
                    <span className={styles.error}>{errors.email ?? ''}</span>
                </div>
                <div className={styles.password}>
                    <input name='password' type='password' value={data.password}  onChange={changeHandler} placeholder="············"/>
                    <span className={styles.error}>{errors.password ?? ''}</span>
                </div>
                <div className={styles.confirmPassword}>
                    <input name='confirmPassword' type='password' value={data.confirmPassword}  onChange={changeHandler} placeholder="············"/>
                    <span className={styles.error}>{errors.confirmPassword ?? ''}</span>
                </div>
                <button className={styles.SignUp}>SignUp </button>
            {/* </form> */}
            <div className={styles.footer}><span>Signup</span><span>Forgot Password?</span></div>
        </div>
    );
};

export default SignUp;