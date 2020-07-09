import React from 'react'

const Bug = (props) => {

    const { userBugs, bug, handleCatch, handleRelease, userId } = props
    const userBug = userBugs.filter(critterObj => { return critterObj.critter.name === bug.name })[0]
    
    function handleClickCatch() {
        const newUserCritter = {
            user_id: userId,
            critter_id: bug.id
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
        fetch(`http://localhost:3000/user-critters/${userBug.id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(json => handleRelease(json))
    }

    function renderButtons() {
        if (localStorage.token) {
            if (!userBug) { return <button onClick={handleClickCatch}>Catch</button> }
            else { return <button onClick={handleClickRelease}>Release</button> }
        }
    }

    return (
    <div className="critter">
        <img src={bug.img_url} alt={bug.name}/>
        <br></br>
        <p>{bug.name}</p>
        {renderButtons()}
    </div> )
}
 
export default Bug