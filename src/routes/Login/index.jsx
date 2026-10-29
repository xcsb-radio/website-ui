import { useState } from 'react'
import './login.css'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loading'
import { API } from '../../constants'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleLogin = async () => {
        setErrorMessage('')
        setLoading(true)
        let res;
        const body = new URLSearchParams({
            username: username,
            password: password
        })
        const config = {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        try {
            res = await axios.post(API + '/token', body, config);
            if (res && res.data) {
                sessionStorage.setItem('access_token', res.data.access_token);
                props.setAuthenticated(true);
                navigate('/xcsb-programmers');
            }
        }
        catch (error) {
            setErrorMessage(error.message || "Something went wrong.")
            console.error('Error fetching token:', error.res?.data || error.message);
        }
        setLoading(false)
    }

    const handleInputChange = (e, input) => {
        if (input === 'username') {
            setUsername(e.target.value)
        }
        if (input === 'password') {
            setPassword(e.target.value)
        }
        setErrorMessage('')
    }

    return (
        <div className="login-container">
            <h1>Log In</h1>
            <h2>You must be a current member of XCSB to access this area.</h2>
            <h3>Current members can register an account <NavLink to='/register'>here</NavLink>.</h3>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Username:</p>
                <input value={username} onChange={(e) => handleInputChange(e, 'username')} />
            </div>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Password:</p>
                <input value={password} onChange={(e) => handleInputChange(e, 'password')} type='password' />
            </div>
            <div className="error-container">
                <p>{errorMessage}</p>
            </div>
            <div onClick={handleLogin} className="login-button">Log In!</div>
        </div>
    )
}

export default Login
