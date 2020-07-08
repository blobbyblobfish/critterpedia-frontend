import React from 'react'
import { Container } from 'semantic-ui-react'

function Profile(props) {

    const { username, id } = props.user

    function handleDelete() {
        fetch(`http://localhost:3000/users/${id}`, {method: "DELETE"})
        .then(props.handleLogout)
    }

    return (
    <Container>
        <p>{username}</p>
        <button onClick={handleDelete}>Delete Account</button>
    </Container>
    )
}
 
export default Profile