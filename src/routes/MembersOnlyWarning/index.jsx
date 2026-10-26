import { useState } from 'react'
import './membersOnly.css'
import { NavLink } from 'react-router-dom'

function MembersOnlyWarning(props) {
  return (
    <div className="members-only-container">
        You must be a member to access this area. <NavLink to='/login'>Log in here.</NavLink>
    </div>
  )
}

export default MembersOnlyWarning
