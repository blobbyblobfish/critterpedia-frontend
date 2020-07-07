import React from 'react'

const SeaCreature = (props) => {
    const { userSeaCreatures, seaCreature } = props
    const userSeaCreature = userSeaCreatures.filter(critterObj => {return critterObj.critter.name === seaCreature.name})
    
    return (<div className="critter">
        <img src={seaCreature.img_url} alt={seaCreature.name}/>
        <p>{seaCreature.name}</p>
        {userSeaCreature.length === 0 ? <button>Catch</button> : <p>Caught!</p>}
    </div> )
}
 
export default SeaCreature