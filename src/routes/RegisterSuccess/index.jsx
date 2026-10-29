import { useState } from 'react'
import './registerSuccess.css'
import { NavLink } from 'react-router-dom'

function RegisterSuccess(props) {
  return (
    <div className="members-only-container">
        You have successfully registered! <NavLink to='/login'>Log in here.</NavLink>
    </div>
  )
}

export default RegisterSuccess