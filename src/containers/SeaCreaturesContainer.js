import React from 'react'
import SeaCreature from '../components/SeaCreature'
import SearchFilter from '../components/SearchFilter'

function SeaCreaturesContainer(props) {

    const { seaCreatures, userSeaCreatures, searchTerm, handleChange, filterAvailable, filterCaught } = props
    const seaCreaturesArray = seaCreatures.filter(seaCreature => seaCreature.name.includes(searchTerm))

    const seaCreatureComponents = seaCreaturesArray.map(seaCreature => <SeaCreature key={seaCreature.id} seaCreature={seaCreature} userSeaCreatures={userSeaCreatures} />)

    return (
        <React.Fragment>
            <SearchFilter filterAvailable={filterAvailable} filterCaught={filterCaught} searchTerm={searchTerm} handleChange={handleChange} />
            <br></br>
            {seaCreatureComponents}
        </React.Fragment>
    )
}

export default SeaCreaturesContainer