import React from 'react'
import Bug from '../components/Bug'
import SearchFilter from '../components/SearchFilter'

function BugContainer(props) {

    const { bugs, userBugs, searchTerm, handleChange, filterAvailable, filterCaught } = props
    const bugsArray = bugs.filter(bug => bug.name.includes(searchTerm))

    const bugComponents = bugsArray.map(bug => <Bug key={bug.id} bug={bug} userBugs={userBugs}/>)

    return ( 
        <React.Fragment>
            <SearchFilter filterAvailable={filterAvailable} filterCaught={filterCaught} searchTerm={searchTerm} handleChange={handleChange} />
            <br></br>
            {bugComponents}
        </React.Fragment>
    )
}
 
export default BugContainer