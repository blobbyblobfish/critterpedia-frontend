import React from 'react'

function RegistrationForm(props) {

    return (<form onSubmit={props.handleRegister}>
        <input name="username" value={props.username} onChange={props.handleChange} type="text" placeholder="username" />
        <input name="password" value={props.password} onChange={props.handleChange} type="text" placeholder="password" /> 
        
        <input name="hemisphere" value="nh" onChange={props.handleChange} id="nh" type="radio" />
        <label htmlFor="nh">Northern Hemisphere</label>
        
        <input name="hemisphere" value="sh" onChange={props.handleChange} id="sh" type="radio" />
        <label htmlFor="sh">Southern Hemisphere</label>
        <input type="submit"/>
    </form> );
    
}
 
export default RegistrationForm