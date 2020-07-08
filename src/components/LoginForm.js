import React, { useState } from 'react'
import { Container } from 'semantic-ui-react';
import '../App.css';

function LoginForm(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const userInfo = {
            username: username,
            password: password,
        }

        props.handleLogin(userInfo)
    }

    return (
    <Container >
    <form onSubmit={handleSubmit} className='form'>
        <br></br>
        <input name="username" value={username} onChange={(evt) => setUsername(evt.target.value)} type="text" placeholder="username" />
        <br></br>
        <br></br>
        <input name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} type="password" placeholder="password" /> 
        <br></br>
        <input type="submit" className='button'/>
    </form>
    </Container> );
    
}
 
export default LoginForm