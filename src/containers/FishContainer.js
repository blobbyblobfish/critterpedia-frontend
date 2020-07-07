import React from 'react'
import Fish from '../components/Fish'
import SearchFilter from '../components/SearchFilter'

function FishContainer(props) {

    const fishComponents = props.fish.map(fish => <Fish key={fish.id} fish={fish}/>)

    return ( 
        <React.Fragment>
            <SearchFilter searchTerm={props.searchTerm} handleChange={props.handleChange}/>
            {fishComponents}
        </React.Fragment>
    )
}
 
<<<<<<< HEAD
export default FishContainer
=======
export default FishContainer;

>>>>>>> urgen
