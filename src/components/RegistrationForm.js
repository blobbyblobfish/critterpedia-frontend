import React from 'react'
import { Container } from 'semantic-ui-react'
import '../App.css';

function RegistrationForm(props) {

    return (
    <Container>
        <form onSubmit={props.handleRegister} className='form'>
            <br></br>
            <input name="username" value={props.username} onChange={props.handleChange} type="text" placeholder="username" />
            <br></br>
            <br></br>
            <input name="password" value={props.password} onChange={props.handleChange} type="text" placeholder="password" /> 
            <br></br>
            <br></br>
            <input name="hemisphere" value="nh" onChange={props.handleChange} id="nh" type="radio" />
            <label htmlFor="nh">Northern Hemisphere</label>
            {' '}
            <input name="hemisphere" value="sh" onChange={props.handleChange} id="sh" type="radio" />
            <label htmlFor="sh">Southern Hemisphere</label>
            <br></br>
            <br></br>
            <input type="submit"/>
        </form> 
    </Container> 
    )
}
 
export default RegistrationForm