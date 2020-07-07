import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {

    return (
        <div className="navbar">
            <NavLink to="/critters/fish">Fish</NavLink>
            <NavLink to="/critters/bugs">Bugs</NavLink>
            <NavLink to="/critters/sea-creatures">Sea Creatures</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    )
}
 
export default NavBar;