import React from 'react'
import Bug from '../components/Bug'
import SearchFilter from '../components/SearchFilter'
import { Container } from 'semantic-ui-react'

function BugContainer(props) {

    const bugComponents = props.bugs.map(bug => <Bug key={bug.id} bug={bug}/>)

    return ( 
        <Container className='form'>
        {/* <React.Fragment className='form'> */}
            <br></br>
            <SearchFilter searchTerm={props.searchTerm} handleChange={props.handleChange} />
            {bugComponents}
        {/* </React.Fragment> */}
        </Container>
    )
}
 
export default BugContainer