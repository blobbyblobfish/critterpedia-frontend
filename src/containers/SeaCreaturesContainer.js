import React from 'react'
import SeaCreature from '../components/SeaCreature'
import SearchFilter from '../components/SearchFilter'
import { Container } from 'semantic-ui-react'

function SeaCreaturesContainer(props) {

    const seaCreatureComponents = props.seaCreatures.map(seaCreature => <SeaCreature key={seaCreature.id} seaCreature={seaCreature}/>)

    return ( 
        <Container className='form'>
        {/* <React.Fragment> */}
            <br></br>
            <SearchFilter searchTerm={props.searchTerm} handleChange={props.handleChange}/>
            {seaCreatureComponents}
        {/* </React.Fragment> */}
        </Container>
    )
}
 
export default SeaCreaturesContainer