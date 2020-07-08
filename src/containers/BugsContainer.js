import React from 'react'
import Bug from '../components/Bug'
import SearchFilter from '../components/SearchFilter'
import { Container } from 'semantic-ui-react'

function BugContainer(props) {

    const { bugs, userBugs, hemisphere, userId, searchTerm, handleCatch, handleChange, filterAvailable, filterCaught } = props
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentHour = currentDate.getHours()

    function bugComponents() {
        const userBugNames = userBugs.map(critterObj => critterObj.critter.name)
        let bugsArray = bugs.filter(bug => bug.name.includes(searchTerm))

        if (filterCaught === "Caught") {
            bugsArray = userBugs.map(critterObj => critterObj.critter).filter(bug => bug.name.includes(searchTerm))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => bug.nh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => bug.sh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => !bug.nh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => !bug.sh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }
            }

            else {
                return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
            }
        }

        if (filterCaught === "Uncaught") {
            bugsArray = bugsArray.filter(bug => !userBugNames.includes(bug.name))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => bug.nh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => bug.sh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => !bug.nh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => !bug.sh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
                }
            }

            else {
                return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
            }
        }

        if (filterAvailable === "Available") {
            if (hemisphere === "nh") {
                bugsArray = bugsArray.filter(bug => bug.nh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
            }

            if (hemisphere === "sh") {
                bugsArray = bugsArray.filter(bug => bug.sh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
            }
        }

        if (filterAvailable === "Unavailable") {
            if (hemisphere === "nh") {
                bugsArray = bugsArray.filter(bug => !bug.nh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
            }

            if (hemisphere === "sh") {
                bugsArray = bugsArray.filter(bug => !bug.sh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
            }
        }


        if (filterAvailable === "All" && filterCaught === "All") {
            return bugsArray.map(bug =><Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} />)
        }
    }

    return ( 
        <Container className='form'>
            <br></br>
            <SearchFilter filterAvailable={filterAvailable} filterCaught={filterCaught} searchTerm={searchTerm} handleChange={handleChange} />
            <br></br>
            {bugComponents()}
        </Container>
    )
}
 
export default BugContainer