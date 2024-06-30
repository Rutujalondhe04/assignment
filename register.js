import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', {
                username,
                password,
            });
            console.log(res.data); // Handle success (e.g., redirect to login)
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} minLength="6" />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
