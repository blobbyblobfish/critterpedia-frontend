import React, { useState } from 'react'

function RegistrationForm(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [hemisphere, setHemisphere] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const userInfo = {
            username: username,
            password: password,
            hemisphere: hemisphere
        }

        props.handleRegister(userInfo)
    }

    return (<form onSubmit={handleSubmit}>
        <input name="username" value={username} onChange={(evt) => setUsername(evt.target.value)} type="text" placeholder="username" />
        <input name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} type="text" placeholder="password" /> 
        
        <input name="hemisphere" value="nh" onChange={(evt) => setHemisphere(evt.target.value)} id="nh" type="radio" />
        <label htmlFor="nh">Northern Hemisphere</label>

        <input name="hemisphere" value="sh" onChange={(evt) => setHemisphere(evt.target.value)} id="sh" type="radio" />
        <label htmlFor="sh">Southern Hemisphere</label>
        <input type="submit"/>
    </form>)
}
 
export default RegistrationForm