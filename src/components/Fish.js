import React from 'react'

const Fish = (props) => {
    const { userFishes, fish } = props
    const userFish = userFishes.filter(critterObj => {return critterObj.critter.name === fish.name})

    return (<div className="critter">
        <img src={fish.img_url} alt={fish.name}/>
        <p>{fish.name}</p>
        {userFish.length === 0 ? <button>Catch</button> : <p>Caught!</p>}
    </div> )
}
 
export default Fish