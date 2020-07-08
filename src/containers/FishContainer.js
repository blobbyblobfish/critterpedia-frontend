import React from 'react'
import Fish from '../components/Fish'
import SearchFilter from '../components/SearchFilter'

function FishContainer(props) {

    const { fish, userFish, hemisphere, userId, searchTerm, handleCatch, handleChange, filterAvailable, filterCaught } = props
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentHour = currentDate.getHours()


    function fishComponents() {
        const userFishNames = userFish.map(critterObj => critterObj.critter.name)
        let fishArray = fish.filter(fish => fish.name.includes(searchTerm))

        if (filterCaught === "Caught") {
            fishArray = userFish.map(critterObj => critterObj.critter).filter(fish => fish.name.includes(searchTerm))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => fish.nh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => fish.sh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => !fish.nh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => !fish.sh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }
            }

            else {
                return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
            }
        }

        if (filterCaught === "Uncaught") {
            fishArray = fishArray.filter(fish => !userFishNames.includes(fish.name))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => fish.nh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => fish.sh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    fishArray = fishArray.filter(fish => !fish.nh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    fishArray = fishArray.filter(fish => !fish.sh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                    return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
                }
            }

            else {
                return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
            }
        }

        if (filterAvailable === "Available") {
            if (hemisphere === "nh") {
                fishArray = fishArray.filter(fish => fish.nh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
            }

            if (hemisphere === "sh") {
                fishArray = fishArray.filter(fish => fish.sh_available_months.includes(currentMonth) && fish.available_times.includes(currentHour))
                return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
            }
        }

        if (filterAvailable === "Unavailable") {
            if (hemisphere === "nh") {
                fishArray = fishArray.filter(fish => !fish.nh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
            }

            if (hemisphere === "sh") {
                fishArray = fishArray.filter(fish => !fish.sh_available_months.includes(currentMonth) || !fish.available_times.includes(currentHour))
                return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
            }
        }


        if (filterAvailable === "All" && filterCaught === "All") {
            return fishArray.map(fish =><Fish key={fish.id} fish={fish} userId={userId} userFishes={userFish} handleCatch={handleCatch} />)
        }
    }

    return ( 
        <React.Fragment>
            <SearchFilter filterAvailable={filterAvailable} filterCaught={filterCaught} searchTerm={searchTerm} handleChange={handleChange} />
            <br></br>
            {fishComponents()}
        </React.Fragment>
    )

}
 
export default FishContainer
