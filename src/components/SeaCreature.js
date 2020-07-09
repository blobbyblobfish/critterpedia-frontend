import React from 'react'
import { Container } from 'semantic-ui-react'

const SeaCreature = (props) => {
    const { userSeaCreatures, seaCreature, handleCatch, handleRelease, userId } = props
    const userSeaCreature = userSeaCreatures.filter(critterObj => {return critterObj.critter.name === seaCreature.name})[0]
    
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
        fetch(`http://localhost:3000/user-critters/${userSeaCreature.id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(json => handleRelease(json))
    }

    function renderButtons() {
        if (localStorage.token) {
            if (!userSeaCreature) { return <button onClick={handleClickCatch} className='catch'><b>Catch</b></button> }
            else { return <button onClick={handleClickRelease} className='caught'><b>Caught</b></button> }
        }
    }

    return (
    <div className="critter">
        <div className='item'>
            <img src={seaCreature.img_url} alt={seaCreature.name}/>
            <br></br>
            <p>{seaCreature.name}</p>
            {renderButtons()}
        </div>
    </div> )
}
 
export default SeaCreature