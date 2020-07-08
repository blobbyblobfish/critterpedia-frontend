import React from 'react'

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

        fetch(`http://localhost:3000/user-critters`, configObj)
            .then(resp => resp.json())
            .then(json => handleCatch(json))
    }

    function handleClickRelease() {
        fetch(`http://localhost:3000/user-critters/${userFish.id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(json => handleRelease(json))
    }

    function renderButtons() {
        if (localStorage.token) {
            if (!userFish) { return <button onClick={handleClickCatch}>Catch</button> }
            else { return <button onClick={handleClickRelease}>Release</button> }
        }
    }

    return (<div className="critter">
        <img src={fish.img_url} alt={fish.name}/>
        <p>{fish.name}</p>
        {renderButtons()}
    </div> )
}
 
export default Fish