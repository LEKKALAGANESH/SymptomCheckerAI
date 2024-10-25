import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../scripts/Login.css';

const Register = () => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [user, setUser] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const changeHandle = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: '' });
        setSuccessMessage("");
    };

    const submitHandle = async (event) => {
        event.preventDefault();
        setErrors({});
        setLoading(true);
        setSuccessMessage("");

        try {
            const response = await axios.post("http://localhost:5000/register", data);
            console.log(response.data);
            setUser(response.data.user);
            setData({ username: "", email: "", password: "", confirmpassword: "" });
            setSuccessMessage("Registration successful! You can now log in.");
        } catch (err) {
            if (err.response && err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else if (err.request) {
                setErrors({ global: 'No response received from the server' });
            } else {
                setErrors({ global: err.message });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <center className='card'>
                <h1>Registration Form</h1>{/* Success message */}
                <form onSubmit={submitHandle} autoComplete='off'>
                    <div>
                        <input
                            type="text"
                            name='username'
                            placeholder='User Name'
                            value={data.username}
                            onChange={changeHandle}
                            required
                        />
                        {errors.username && <p className='errors'>{errors.username}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            value={data.email}
                            onChange={changeHandle}
                            required
                        />
                        {errors.email && <p className='errors'>{errors.email}</p>}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Password'
                            value={data.password}
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
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name='confirmpassword'
                            placeholder='Confirm Password'
                            value={data.confirmpassword}
                            onChange={changeHandle}
                            required
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                        >
                            {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                    {errors.confirmpassword && <p className='errors'>{errors.confirmpassword}</p>}
                    <br />
                    <button type='submit' className="register" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                    {/* <br /> */}
                    {successMessage && <p className='success'>{successMessage}</p>}
                    <div className='buttons'>
                        <NavLink to='/'>Back</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                </form>
                {errors.global && <div className='errors'>{errors.global}</div>}
            </center>
        </div>
    );
};

export default Register;
