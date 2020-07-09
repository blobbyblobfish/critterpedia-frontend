import React from 'react'
import { Container } from 'semantic-ui-react'

const Fish = (props) => {
    const { userFishes, fish, handleCatch, userId } = props
    const userFish = userFishes.filter(critterObj => { return critterObj.critter.name === fish.name })
    
    function handleClick() {
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

        fetch(`http://localhost:3000/user-critters`, configObj)
            .then(resp => resp.json())
            .then(json => handleCatch(json))
    }

    return (
    <div className="grid-container">
        <div className='item'>
            <img src={fish.img_url} alt={fish.name}/>
            <br></br>
            <p>{fish.name}</p>
            {userFish.length === 0 ? <button onClick={handleClick} className='button'>Catch</button> : <p>Caught!</p>}
        </div>
    </div> )
}
 
export default Fish