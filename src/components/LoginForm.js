import React from 'react'

function LoginForm(props) {

    return (<form onSubmit={props.handleLogin}>
        <input name="username" value={props.username} onChange={props.handleChange} type="text" placeholder="username" />
        <input name="password" value={props.password} onChange={props.handleChange} type="text" placeholder="password" /> 
        <input type="submit"/>
    </form> );
    
}
 
export default LoginForm