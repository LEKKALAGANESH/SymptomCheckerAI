import axios from 'axios';
import React, { useContext, useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { store } from '../../App';
import '../scripts/Login.css';

const Login = () => {
    const { token, setToken } = useContext(store);
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const changeHandle = event => {
        setData({ ...data, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: '' });
    };

    const headers = {
        'Content-Type': 'application/json',
        'x-token': token
    };

    const submitHandle = async event => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", data, {
                headers: headers
            });

            setToken(response.data.token);
            setUsername(response.data.user.username);

        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else {
                setErrors({ global: 'Internal Server Error' });
            }
        }
    };

    if (token) {
        return <Navigate to="/" state={{ username: username }} />;
    }

    return (
        <div>
            <center className='card'>
                <h1>Login</h1>
                <form onSubmit={submitHandle}>
                    <div>
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            onChange={changeHandle}
                        />
                        {errors.email && <p className='errors'>{errors.email}</p>}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Password'
                            onChange={changeHandle}
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                        >
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                    {errors.password && <p className='errors'>{errors.password}</p>}
                    <input type='submit' value="Sign In" />
                    <div className='buttons'>
                        <NavLink to='/'>Back</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                    </div>
                    <br />
                </form>
                {errors.global && <p className='errors'>{errors.global}</p>}
            </center>
        </div>
    );
};

export default Login;
