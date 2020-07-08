import React from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom'

function NavBar() {

    return (
        <div className="navbar" >
            <ul>
                <NavLink href="#" to="/profile">Profile</NavLink>
                <NavLink href="#" to="/critters/fish">Fish</NavLink> 
                <NavLink href="#" to="/critters/bugs">Bugs</NavLink>
                <NavLink href="#" to="/critters/sea-creatures">Sea Creatures</NavLink>
                <NavLink href="#" to="/login">Login</NavLink>
                <NavLink href="#" to="/register">Register</NavLink>
            </ul> 
        </div>
    )
}
 
export default NavBar;