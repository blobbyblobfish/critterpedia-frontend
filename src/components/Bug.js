import React from 'react'

const Bug = (props) => {

    const { userBugs, bug, handleCatch, userId } = props
    const userBug = userBugs.filter(critterObj => { return critterObj.critter.name === bug.name })
    
    function handleClick() {
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

    return (
    <div className="grid-container">
        <img src={bug.img_url} alt={bug.name}/>
        <br></br>
        <p>{bug.name}</p>
        {userBug.length === 0 ? <button onClick={handleClick} className='button'>Catch</button> : <p>Caught!</p>}
    </div> )
}
 
export default Bug