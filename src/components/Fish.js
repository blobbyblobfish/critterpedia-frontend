import React from 'react'
import { Container } from 'semantic-ui-react'

const Fish = (props) => {
    const { userFishes, fish, handleCatch, handleRelease, userId } = props
    const userFish = userFishes.filter(critterObj => { return critterObj.critter.name === fish.name })[0]
    
    function handleClickCatch() {
        const newUserCritter = {
            user_id: userId,
            critter_id: fish.id
        }

        const configObj = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify(newUserCritter)
        }

        fetch(`https://critterpedia-backend.herokuapp.com/user-critters`, configObj)
            .then(resp => resp.json())
            .then(json => handleCatch(json))
    }

    function handleClickRelease() {
        fetch(`https://critterpedia-backend.herokuapp.com/user-critters/${userFish.id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(json => handleRelease(json))
    }

    function renderButtons() {
        if (localStorage.token) {
            if (!userFish) { return <button onClick={handleClickCatch} className='catch'><b>Catch</b></button> }
            else { return <button onClick={handleClickRelease} className='caught'><b>Caught</b></button> }
        }
    }

    return (
    <div className="critter">
        <div className='item'>
            <img src={fish.img_url} alt={fish.name}/>
            <br></br>
            <p>{fish.name}</p>
            {renderButtons()}
        </div>
    </div> )
}
 
export default Fish