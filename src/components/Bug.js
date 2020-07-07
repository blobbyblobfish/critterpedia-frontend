import React from 'react'

const Bug = (props) => {

    const { userBugs, bug } = props
    const userBug = userBugs.filter(critterObj => {return critterObj.critter.name === bug.name})

    return (<div className="critter">
        <img src={bug.img_url} alt={bug.name}/>
        <p>{bug.name}</p>
        {userBug.length === 0 ? <button>Catch</button> : <p>Caught!</p>}
    </div> )
}
 
export default Bug