import React from 'react'
import Fish from '../components/Fish'
import SearchFilter from '../components/SearchFilter'
import { Container } from 'semantic-ui-react';

function FishContainer(props) {

    const fishComponents = props.fish.map(fish => <Fish key={fish.id} fish={fish}/>)

    return (
        <Container className='form'>
        {/* <React.Fragment> */}
            <br></br>
            <SearchFilter searchTerm={props.searchTerm} handleChange={props.handleChange}/>
            {fishComponents}
        {/* </React.Fragment> */}
        </Container>
    )
}
 
export default FishContainer
