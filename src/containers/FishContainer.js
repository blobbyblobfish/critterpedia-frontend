import React from 'react'
import Fish from '../components/Fish'
import SearchFilter from '../components/SearchFilter'
import { Container } from 'semantic-ui-react';

function FishContainer(props) {

    const { fish, userFish, hemisphere, userId, searchTerm, handleCatch, handleRelease, handleChange, filterAvailable, filterCaught } = props
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentHour = currentDate.getHours()


    function fishComponents() {
        const userFishNames = userFish.map(critterObj => critterObj.critter.name)
        let fishArray = fish.filter(fish => fish.name.includes(searchTerm))

        if (filterCaught === "Caught") {
            fishArray = userFish.map(critterObj => critterObj.critter).filter(fish => fish.name.includes(searchTerm))

            if (!localStorage.token) {return <p>You must login or create an account</p>}

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => fish.nh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => fish.sh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                else {return <p>You must register and select a hemisphere</p>}
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => !fish.nh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => !fish.sh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                else {return <p>You must register and select a hemisphere</p>}
            }

            else {
                if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                else {return <p>No fish found!</p>}
            }
        }

        if (filterCaught === "Uncaught") {
            fishArray = fishArray.filter(fish => !userFishNames.includes(fish.name))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => fish.nh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => fish.sh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                else {return <p>You must register and select a hemisphere</p>}
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => !fish.nh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => !fish.sh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
                }

                else {return <p>You must register and select a hemisphere</p>}
            }

            else {
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
            }
        }

        if (filterAvailable === "Available") {
            if (hemisphere === "nh") {
                fishArray = fishArray.filter(fish => fish.nh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
            }

            if (hemisphere === "sh") {
                fishArray = fishArray.filter(fish => fish.sh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
            }

            else {return <p>You must register and select a hemisphere</p>}
        }

        if (filterAvailable === "Unavailable") {
            if (hemisphere === "nh") {
                fishArray = fishArray.filter(fish => !fish.nh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
            }

            if (hemisphere === "sh") {
                fishArray = fishArray.filter(fish => !fish.sh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
                    else {return <p>No fish found!</p>}
            }

            else {return <p>You must register and select a hemisphere</p>}
        }


        if (filterAvailable === "All" && filterCaught === "All") {
            if (fishArray.length > 0) {return fishArray.map(fish => <Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} handleRelease={handleRelease}/>)}
            else {return <p>No fish found!</p>}}
    }

    return ( 
        <Container className='form'>
            <br></br>
            <SearchFilter filterAvailable={filterAvailable} filterCaught={filterCaught} searchTerm={searchTerm} handleChange={handleChange} />
            <br></br>
            {fishComponents()}
        </Container>
    )

}
 
export default FishContainer
