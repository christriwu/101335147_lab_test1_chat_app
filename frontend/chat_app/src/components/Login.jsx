import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

function Login() {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();


    return (
        <div>
            <h1>Login</h1>
            <form action="POST">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required></input>
                <button type="submit">Login</button>
                <Link to="/signup">Signup</Link>
            </form>

        </div>
    )
}

export default Login;