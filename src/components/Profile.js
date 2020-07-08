import React from 'react'
import { Container } from 'semantic-ui-react'

function Profile(props) {

    const { handleUpdateUser, handleLogout } = props
    const { username, hemisphere, id } = props.user

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
                username: username,
                hemisphere: hemisphere
            })
        }
        
        fetch(`http://localhost:3000/users/${id}`, configObj)
            .then(console.log("fetched"))
    }

    return (
    <React.Fragment>
        <h4>{`Welcome, ${username}`}</h4>
        <h1>Stats: </h1>
            <p>Bugs caught: </p>
            <p>Fish caught: </p>
            <p>Sea creatures caught: </p>
        <h1>Update Account: </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={handleUpdateUser} />
            <input name="hemisphere" value="nh" onChange={handleUpdateUser} id="nh" type="radio" checked={hemisphere === "nh"}/>
            <label htmlFor="nh">Northern Hemisphere</label>

            <input name="hemisphere" value="sh" onChange={handleUpdateUser} id="sh" type="radio" checked={hemisphere === "sh"}/>
            <label htmlFor="sh">Southern Hemisphere</label>
            <input type="submit" value="Update Account"/>
        </form>  
        <button onClick={handleDelete}>Delete Account</button>
    </React.Fragment>)
}
 
export default Profile