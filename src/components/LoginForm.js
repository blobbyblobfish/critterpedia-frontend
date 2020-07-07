import React, { useState } from 'react'

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

    return (<form onSubmit={handleSubmit}>
        <input name="username" value={username} onChange={(evt) => setUsername(evt.target.value)} type="text" placeholder="username" />
        <input name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} type="text" placeholder="password" /> 
        <input type="submit"/>
    </form> );
    
}
 
export default LoginForm