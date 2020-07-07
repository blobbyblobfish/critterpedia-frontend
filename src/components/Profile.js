import React from 'react'

function Profile(props) {

    const { username, password, id } = props.user

    return (<React.Fragment>
        <p>{username}</p>
    </React.Fragment>)
}
 
export default Profile