import React from 'react'

const Fish = (props) => {
    const { userFishes, fish, handleCatch, handleRelease, userId } = props
    const userFish = userFishes.filter(critterObj => { return critterObj.critter.name === fish.name })
    
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

        fetch(`http://localhost:3000/user-critters`, configObj)
            .then(resp => resp.json())
            .then(json => handleCatch(json))
    }

    function handleClickRelease() {
        fetch(`http://localhost:3000/user-critters/${userFish[0].id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(json => handleRelease(json))
    }

    return (<div className="critter">
        <img src={fish.img_url} alt={fish.name}/>
        <p>{fish.name}</p>
        {userFish.length === 0 ? <button onClick={handleClickCatch}>Catch</button> : <button onClick={handleClickRelease}>Release</button>}
    </div> )
}
 
export default Fish