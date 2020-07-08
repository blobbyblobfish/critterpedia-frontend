import React from 'react'
import Bug from '../components/Bug'
import SearchFilter from '../components/SearchFilter'
import { Container } from 'semantic-ui-react'

function BugContainer(props) {

    const { bugs, userBugs, hemisphere, userId, searchTerm, handleCatch, handleRelease, handleChange, filterAvailable, filterCaught } = props
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentHour = currentDate.getHours()

    function bugComponents() {
        const userBugNames = userBugs.map(critterObj => critterObj.critter.name)
        let bugsArray = bugs.filter(bug => bug.name.includes(searchTerm))

        if (filterCaught === "Caught") {
            bugsArray = userBugs.map(critterObj => critterObj.critter).filter(bug => bug.name.includes(searchTerm))

            if (!localStorage.token) {return <p>You must login or create an account</p>}

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => bug.nh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => bug.sh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }
                
                else {return <p>You must register and select a hemisphere</p>}
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => !bug.nh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => !bug.sh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }

                else {return <p>You must register and select a hemisphere</p>}
            }

            else {
                if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
            }
        }

        if (filterCaught === "Uncaught") {
            bugsArray = bugsArray.filter(bug => !userBugNames.includes(bug.name))

            if (filterAvailable === "Available") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => bug.nh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => bug.sh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }

                else {return <p>You must register and select a hemisphere</p>}
            }

            else if (filterAvailable === "Unavailable") {
                if (hemisphere === "nh") {
                    bugsArray = bugsArray.filter(bug => !bug.nh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }

                if (hemisphere === "sh") {
                    bugsArray = bugsArray.filter(bug => !bug.sh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                    if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
                }

                else {return <p>You must register and select a hemisphere</p>}
            }

            else {
                if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
            }
        }

        if (filterAvailable === "Available") {
            if (hemisphere === "nh") {
                bugsArray = bugsArray.filter(bug => bug.nh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
            }

            if (hemisphere === "sh") {
                bugsArray = bugsArray.filter(bug => bug.sh_available_months.includes(currentMonth) && bug.available_times.includes(currentHour))
                if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
            }

            else {return <p>You must register and select a hemisphere</p>}
        }

        if (filterAvailable === "Unavailable") {
            if (hemisphere === "nh") {
                bugsArray = bugsArray.filter(bug => !bug.nh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
            }

            if (hemisphere === "sh") {
                bugsArray = bugsArray.filter(bug => !bug.sh_available_months.includes(currentMonth) || !bug.available_times.includes(currentHour))
                if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
                    else {return <p>No bugs found</p>}
            }

            else {return <p>You must register and select a hemisphere</p>}
        }


        if (filterAvailable === "All" && filterCaught === "All") {
            if (bugsArray.length > 0 ) {return bugsArray.map(bug => <Bug key={bug.id} bug={bug} userId={userId} userBugs={userBugs} handleCatch={handleCatch} handleRelease={handleRelease} />)}
            else {return <p>No bugs found</p>}
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