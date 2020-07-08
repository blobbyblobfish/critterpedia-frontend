import React from 'react'
import SeaCreature from '../components/SeaCreature'
import SearchFilter from '../components/SearchFilter'
import { Container } from 'semantic-ui-react'

function SeaCreaturesContainer(props) {

    const { seaCreatures, userSeaCreatures, hemisphere, userId, searchTerm, handleCatch, handleRelease, handleChange, filterAvailable, filterCaught } = props
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentHour = currentDate.getHours()

    function seaCreatureComponents() {
        const userSeaCreatureNames = userSeaCreatures.map(critterObj => critterObj.critter.name)
        let seaCreaturesArray = seaCreatures.filter(seaCreature => seaCreature.name.includes(searchTerm))

        if (filterCaught === "Caught") {
            seaCreaturesArray = userSeaCreatures.map(critterObj => critterObj.critter).filter(seaCreature => seaCreature.name.includes(searchTerm))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => seaCreature.nh_available_months.includes(currentMonth) && seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature => <SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }

                if (hemisphere === "sh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => seaCreature.sh_available_months.includes(currentMonth) && seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => !seaCreature.nh_available_months.includes(currentMonth) || !seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }

                if (hemisphere === "sh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => !seaCreature.sh_available_months.includes(currentMonth) || !seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }
            }

            else {
                return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
            }
        }

        if (filterCaught === "Uncaught") {
            seaCreaturesArray = seaCreaturesArray.filter(seaCreature => !userSeaCreatureNames.includes(seaCreature.name))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => seaCreature.nh_available_months.includes(currentMonth) && seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }

                if (hemisphere === "sh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => seaCreature.sh_available_months.includes(currentMonth) && seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => !seaCreature.nh_available_months.includes(currentMonth) || !seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }

                if (hemisphere === "sh") {
                    seaCreaturesArray = seaCreaturesArray.filter(seaCreature => !seaCreature.sh_available_months.includes(currentMonth) || !seaCreature.available_times.includes(currentHour))
                    return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
                }
            }

            else {
                return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
            }
        }

        if (filterAvailable === "Available") {
            if (hemisphere === "nh") {
                seaCreaturesArray = seaCreaturesArray.filter(seaCreature => seaCreature.nh_available_months.includes(currentMonth) && seaCreature.available_times.includes(currentHour))
                return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
            }

            if (hemisphere === "sh") {
                seaCreaturesArray = seaCreaturesArray.filter(seaCreature => seaCreature.sh_available_months.includes(currentMonth) && seaCreature.available_times.includes(currentHour))
                return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
            }
        }

        if (filterAvailable === "Unavailable") {
            if (hemisphere === "nh") {
                seaCreaturesArray = seaCreaturesArray.filter(seaCreature => !seaCreature.nh_available_months.includes(currentMonth) || !seaCreature.available_times.includes(currentHour))
                return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
            }

            if (hemisphere === "sh") {
                seaCreaturesArray = seaCreaturesArray.filter(seaCreature => !seaCreature.sh_available_months.includes(currentMonth) || !seaCreature.available_times.includes(currentHour))
                return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
            }
        }


        if (filterAvailable === "All" && filterCaught === "All") {
            return seaCreaturesArray.map(seaCreature =><SeaCreature key={seaCreature.id} seaCreature={seaCreature} userId={userId} userSeaCreatures={userSeaCreatures} handleCatch={handleCatch} handleRelease={handleRelease}/>)
        }
    }

    return (
        <Container className='form'>
            <br></br>
            <SearchFilter filterAvailable={filterAvailable} filterCaught={filterCaught} searchTerm={searchTerm} handleChange={handleChange} />
            <br></br>
            {seaCreatureComponents()}
        </Container>
    )
}

export default SeaCreaturesContainer