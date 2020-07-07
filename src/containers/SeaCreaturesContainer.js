import React from 'react'
import SeaCreature from '../components/SeaCreature'
import SearchFilter from '../components/SearchFilter'

function SeaCreaturesContainer(props) {

    const seaCreatureComponents = props.seaCreatures.map(seaCreature => <SeaCreature key={seaCreature.id} seaCreature={seaCreature}/>)

    return ( 
        <React.Fragment>
            <SearchFilter searchTerm={props.searchTerm} handleChange={props.handleChange}/>
            {seaCreatureComponents}
        </React.Fragment>
    )
}
 
export default SeaCreaturesContainer