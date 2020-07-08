import React from 'react'
import { Container } from 'semantic-ui-react'

const SeaCreature = (props) => {
    const { userSeaCreatures, seaCreature, handleCatch, handleRelease, userId } = props
    const userSeaCreature = userSeaCreatures.filter(critterObj => {return critterObj.critter.name === seaCreature.name})
    
    function handleClickCatch() {
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

    function handleClickRelease() {
        fetch(`http://localhost:3000/user-critters/${userSeaCreature[0].id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(json => handleRelease(json))
    }

    return (<div className="critter">
        <img src={seaCreature.img_url} alt={seaCreature.name}/>
        <p>{seaCreature.name}</p>
        {userSeaCreature.length === 0 ? <button onClick={handleClickCatch}>Catch</button> : <button onClick={handleClickRelease}>Release</button>}
    </div> )
}
 
export default SeaCreature