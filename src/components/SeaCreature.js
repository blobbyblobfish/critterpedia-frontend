import React from 'react'
import { Container } from 'semantic-ui-react'

const SeaCreature = (props) => {
    const { userSeaCreatures, seaCreature, handleCatch, userId } = props
    const userSeaCreature = userSeaCreatures.filter(critterObj => {return critterObj.critter.name === seaCreature.name})
    
    function handleClick() {
        const newUserCritter = {
            user_id: userId,
            critter_id: seaCreature.id
        }

        const configObj = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify(newUserCritter)
        }

        fetch(`http://localhost:3000/user-critters`, configObj)
            .then(resp => resp.json())
            .then(json => handleCatch(json))
    }

    return (
    <div className="grid-container">
        <img src={seaCreature.img_url} alt={seaCreature.name}/>
        <br></br>
        <p>{seaCreature.name}</p>
        {userSeaCreature.length === 0 ? <button onClick={handleClick} className='button'>Catch</button> : <p>Caught!</p>}
    </div> )
}
 
export default SeaCreature