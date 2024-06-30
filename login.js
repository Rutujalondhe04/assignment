import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', {
                username,
                password,
            });
            console.log(res.data); // Handle success (e.g., set token in local storage and redirect)
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
