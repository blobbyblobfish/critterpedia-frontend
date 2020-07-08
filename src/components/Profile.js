import React from 'react'
import { Container } from 'semantic-ui-react'

function Profile(props) {
    return (
    <Container>
    {/* <React.Fragment> */}
        <p>{props.username}</p>
    {/* </React.Fragment> */}
    </Container>
    )
}
 
export default Profile