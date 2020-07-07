import React from 'react'
import Bug from '../components/Bug'
import SearchFilter from '../components/SearchFilter'

function BugContainer(props) {

    const bugComponents = props.bugs.map(bug => <Bug key={bug.id} bug={bug}/>)

    return ( 
        <React.Fragment>
            <SearchFilter searchTerm={props.searchTerm} handleChange={props.handleChange} />
            {bugComponents}
        </React.Fragment>
    )
}
 
export default BugContainer