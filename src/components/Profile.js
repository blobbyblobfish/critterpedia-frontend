import React from 'react'

function Profile(props) {

    const { username, id } = props.user

    function handleDelete() {
        fetch(`http://localhost:3000/users/${id}`, {method: "DELETE"})
        .then(props.handleLogout)
    }

    return (<React.Fragment>
        <p>{username}</p>
        <button onClick={handleDelete}>Delete Account</button>
    </React.Fragment>)
}
 
export default Profile