import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'
import Audio from '../components/Audio'


function NavBar(props) {

    return (
        <div className="navbar">
            <br></br>
            <NavLink to="/critters/fish">Fish</NavLink>
            <NavLink to="/critters/bugs">Bugs</NavLink>
            <NavLink to="/critters/sea-creatures">Sea Creatures</NavLink>
            {localStorage.token
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
            <Audio enabled={props.enabled} toggleAudio={props.toggleAudio}/>
        </div>
    )
}
 
export default NavBar;