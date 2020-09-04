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

        fetch(`https://critterpedia-backend.herokuapp.com/user-critters`, configObj)
            .then(resp => resp.json())
            .then(json => handleCatch(json))
    }

    function handleClickRelease() {
        fetch(`https://critterpedia-backend.herokuapp.com/user-critters/${userBug.id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(json => handleRelease(json))
    }

    function renderButtons() {
        if (localStorage.token) {
            if (!userBug) { return <button onClick={handleClickCatch} className='catch'><b>Catch</b></button> }
            else { return <button onClick={handleClickRelease} className='caught'><b>Caught</b></button> }
        }
    }

    return (
    <div className="critter">
        <div className='item'>
            <img src={bug.img_url} alt={bug.name}/>
            <br></br>
            <p>{bug.name}</p>
            {renderButtons()}
        </div>
    </div> )
}
 
export default Bug