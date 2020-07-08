import React from 'react'
import { Container } from 'semantic-ui-react';
import '../App.css';

function LoginForm(props) {

    return (
    <Container >
        <form onSubmit={props.handleLogin} className='form'>
            <br></br>
            <input name="username" value={props.username} onChange={props.handleChange} type="text" placeholder="username" />
            <br></br>
            <br></br>
            <input name="password" value={props.password} onChange={props.handleChange} type="text" placeholder="password" /> 
            <br></br>
            <br></br>
            <input type="submit"/>
        </form> 
    </Container>
    )   
}
 
export default LoginForm