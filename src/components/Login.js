import React, { useState } from 'react';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const changeHandler = (element) => {
        switch (element.target.name) {
            case 'email':
                setEmail(element.value)
                break;
            case 'password':
                setPass(element.value)
                break;
            default:
                break;
        } 
    }
    return (
        <div className='screen-1'>
            {/* <form> */}
                <div className='password'>
                    {/* <label for="email">Email Address</label> */}
                    <input name='email' type='text' value={email} onChange={changeHandler}  placeholder="Username@gmail.com"/>
                </div>
                <div className='email'>
                    {/* <label for="password">Password</label> */}
                    <input name='password' type='text' value={pass}  onChange={changeHandler} placeholder="············"/>
                </div>
                <button class="login">Login </button>
            {/* </form> */}
            <div class="footer"><span>Signup</span><span>Forgot Password?</span></div>
        </div>
    );
};

export default Login;