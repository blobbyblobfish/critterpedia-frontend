import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(props) {

    return (
        <div className="navbar">
            <NavLink to="/critters/fish">Fish</NavLink>
            <NavLink to="/critters/bugs">Bugs</NavLink>
            <NavLink to="/critters/sea-creatures">Sea Creatures</NavLink>
            {props.token
                ?
                <React.Fragment>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </React.Fragment>}
        </div>
    )
}
 
export default NavBar;