import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'

function Profile(props) {

    const { handlePatchUser, handleLogout } = props
    const { username, hemisphere, id } = props.user

    const userHemisphere = hemisphere === "nh" ? "Northern" : "Southern"

    const [newUsername, setNewUsername] = useState(`${username}`)
    const [newHemisphere, setNewHemisphere] = useState("")

    useEffect(() => {
        setNewUsername(username)
    }, [username])

    useEffect(() => {
        setNewHemisphere(hemisphere)
    }, [hemisphere])

    function handleDelete() {
        fetch(`http://localhost:3000/users/${id}`, {method: "DELETE"})
        .then(handleLogout)
    }

    function handleSubmit(evt) {
        evt.preventDefault()

        const configObj = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                username: newUsername,
                hemisphere: newHemisphere
            })
        }
        
        fetch(`http://localhost:3000/users/${id}`, configObj)
            .then(resp => resp.json())
            .then(json => handlePatchUser(json))
    }

    return (
    <React.Fragment>
        <h4>{`Welcome, ${username}`}</h4>
        <p>{`You are in the ${userHemisphere} Hemisphere`}</p>
        <h1>Stats: </h1>
            <p>Bugs caught: </p>
            <p>Fish caught: </p>
            <p>Sea creatures caught: </p>
        <h1>Update Account: </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input name="username" value={newUsername} onChange={(evt) => setNewUsername(evt.target.value)} id="username" type="text"/>
                
            <input name="hemisphere" value="nh" onChange={(evt) => setNewHemisphere(evt.target.value)} id="nh" type="radio" checked={newHemisphere === "nh"}/>
            <label htmlFor="nh">Northern Hemisphere</label>

            <input name="hemisphere" value="sh" onChange={(evt) => setNewHemisphere(evt.target.value)} id="sh" type="radio" checked={newHemisphere === "sh"}/>
            <label htmlFor="sh">Southern Hemisphere</label>
            <input type="submit" value="Update Account"/>
        </form>  
        <button onClick={handleDelete}>Delete Account</button>
    </React.Fragment>)
}
 
export default Profile