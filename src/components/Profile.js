import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'

function Profile(props) {

    const { handlePatchUser, handleLogout } = props
    const { username, hemisphere, id, userCritters } = props.user

    const userBugs = userCritters.filter(critterObj => critterObj.critter.category === "bug")
    const userFish = userCritters.filter(critterObj => critterObj.critter.category === "fish")
    const userSeaCreatures = userCritters.filter(critterObj => critterObj.critter.category === "sea_creature")
    const userHemisphere = hemisphere === "nh" ? "Northern" : "Southern"

    const [newUsername, setNewUsername] = useState(`${username}`)
    const [newHemisphere, setNewHemisphere] = useState("")
    const [confirmAlert, setConfirmAlert] = useState(false)

    useEffect(() => {
        setNewUsername(username)
    }, [username])

    useEffect(() => {
        setNewHemisphere(hemisphere)
    }, [hemisphere])

    function handleDelete() {
        fetch(`https://critterpedia-backend.herokuapp.com/users/${id}`, { method: "DELETE" })
            .then(resp => resp.json())
            .then(handleLogout)
    }

    function cancelDelete() {
        setConfirmAlert(false)
    }

    function renderConfirmAlert() {
        setConfirmAlert(true)
    }

    function handleSubmit(evt) {
        evt.preventDefault()

        const newUserObj = {
            user: {
                id: id,
                username: newUsername,
                hemisphere: newHemisphere,
                userCritters: userCritters,
            }
        }

        const configObj = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify(newUserObj)
        }
        
        fetch(`https://critterpedia-backend.herokuapp.com/users/${id}`, configObj)
            .then(resp => resp.json())
            .then(() => handlePatchUser(newUserObj["user"]))
    }

    return (        
    <React.Fragment>
        <div className='form'>
            <br></br>
            <h4>{`Welcome, ${username}!`}</h4>
            <h1>Stats: </h1>
                <p>{`${userBugs.length} Bugs out of 80`}</p>
                <p>{`${userFish.length} Fish out of 80`}</p>
                <p>{`${userSeaCreatures.length} Sea Creatures out of 40`}</p>
                <p>{`You are in the ${userHemisphere} Hemisphere.`}</p>
            <h1>Update Account: </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username </label>
                <input name="username" value={newUsername} onChange={(evt) => setNewUsername(evt.target.value)} id="username" type="text"/>
                <br></br>
                <br></br>
                <input name="hemisphere" value="nh" onChange={(evt) => setNewHemisphere(evt.target.value)} id="nh" type="radio" checked={newHemisphere === "nh"}/>
                <label htmlFor="nh">Northern Hemisphere</label>
                {' '}
                <input name="hemisphere" value="sh" onChange={(evt) => setNewHemisphere(evt.target.value)} id="sh" type="radio" checked={newHemisphere === "sh"}/>
                <label htmlFor="sh">Southern Hemisphere</label>
                <br></br>
                <br></br>
                <input type="submit" value="Update Account" className='update'/>
            </form>  
            <br></br>
            {confirmAlert ? <div>
                <h4>Are you sure?</h4>
                <p>This action cannot be undone.</p>
                <button onClick={handleDelete} className='yes'>Yes</button>
                {' '}
                <button onClick={cancelDelete} className='no'>No</button>
            </div>
            :
            <button className='delete' onClick={renderConfirmAlert}>Delete Account</button>}
        </div>
    </React.Fragment>)
}
 
export default Profile