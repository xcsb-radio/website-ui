import { useState } from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loading'
import { API } from '../../constants'

function Register(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [currentSelShow, setCurrentSelShow] = useState('')
    const [associatedShows, setAssociatedShows] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const validatePasswords = () => password === password2

    const handleRegister = async () => {
        setErrorMessage('')
        setLoading(true)
        let res;
        const payload = {
            name: name,
            email: email,
            username: username,
            password: password,
            associatedShows: associatedShows
        }
        console.log('payload is...', payload)
        const config = {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        if (validatePasswords()) {
        try {
            res = await axios.post(API + '/register', payload, config);
            if (res && res.data) {
                sessionStorage.setItem('access_token', res.data.access_token);
                navigate('/success');
            }
        }
        catch (error) {
            setErrorMessage(error.message || "Something went wrong.")
            console.error('Error registering:', error.res?.data || error.message);
        }
    } else {
        setErrorMessage('Password fields do not match.')
    }
        setLoading(false)
    }

    const handleInputChange = (e, input) => {
        if (input === 'email') {
            setEmail(e.target.value)
        }
        if (input === 'name') {
            setName(e.target.value)
        }
        if (input === 'username') {
            setUsername(e.target.value)
        }
        if (input === 'password') {
            setPassword(e.target.value)
        }
        if (input === 'password2') {
            setPassword2(e.target.value)
        }
        setErrorMessage('')
    }
    const handleSelectShows = (e) => {
        console.log('show', e.target.value)
        const selected = [...associatedShows]
        selected.push(e.target.value)
        setAssociatedShows(selected)
        setErrorMessage('')
    }
    const removeChosen = (show) => {
        const selected = [...associatedShows]
        const updated = selected.filter(s => s !== show)
        setAssociatedShows(updated)
        setErrorMessage('')
    }
    const availableShows = [...new Set(props.parsedData.map(i => i.SHOW_TITLE))]
    return (
        <div className="login-container">
            {loading ? <Loader /> : null}
            <h1>Register Member Account</h1>
            <h2>This system is by invite and for current members of XCSB only.</h2>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Email:</p>
                <input value={email} onChange={(e) => handleInputChange(e, 'email')} />
            </div>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Name:</p>
                <input value={name} onChange={(e) => handleInputChange(e, 'name')} />
            </div>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Username:</p>
                <input value={username} onChange={(e) => handleInputChange(e, 'username')} />
            </div>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Password:</p>
                <input value={password} onChange={(e) => handleInputChange(e, 'password')} type='password' />
            </div>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Enter Password Again:</p>
                <input value={password2} onChange={(e) => handleInputChange(e, 'password2')} type='password' />
            </div>
            <div className='input-field'>
                <p style={{ marginBottom: 0 }}>Choose the show(s) you currently program or plan to program later in the studio. (Select "none" if you don't have a show right now, or if your show does not yet appear on this list):</p>
                <select name={currentSelShow} value={currentSelShow} onChange={(e) => handleSelectShows(e)}>
                    <option name='none' value='none'>None</option>
                    {availableShows.map(s => <option name={s} value={s}>{s}</option>)}
                </select>
                <div className="chosen-shows-box">
                    {associatedShows.map(a => <div className="chosen-show"><span>{a}</span><div style={{marginLeft: '0.8em', marginTop: '-0.5em'}} onClick={() => removeChosen(a)}>x</div></div>)}
                </div>
            </div>
            <div className="error-container">
                <p>{errorMessage}</p>
            </div>
            <div onClick={handleRegister} className="register-button">Register</div>
        </div>
    )
}

export default Register
