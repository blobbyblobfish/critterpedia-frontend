import React from 'react'
import Fish from '../components/Fish'
import SearchFilter from '../components/SearchFilter'

function FishContainer(props) {

    const { fish, userFish, searchTerm, handleChange, filterAvailable, filterCaught } = props
    const fishArray = fish.filter(bug => bug.name.includes(searchTerm))

    const fishComponents = fishArray.map(fish => <Fish key={fish.id} fish={fish} userFishes={userFish}/>)

    return ( 
        <React.Fragment>
            <SearchFilter filterAvailable={filterAvailable} filterCaught={filterCaught} searchTerm={searchTerm} handleChange={handleChange} />
            <br></br>
            {fishComponents}
        </React.Fragment>
    )

}
 
export default FishContainer
