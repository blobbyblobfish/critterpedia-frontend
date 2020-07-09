import React from 'react'

function SearchFilter(props) {

    const { searchTerm, handleChange, filterAvailable, filterCaught } = props

    return (
    <div className="search-filter">
       
        <input type="text" name="searchTerm" value={searchTerm} onChange={handleChange} placeholder="Search by name" />
        
        <label htmlFor="available">Filter by availability: </label>
        <select name="filterAvailable" id="available" value={filterAvailable} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
        </select>

        <label htmlFor="caught">Filter by caught: </label>
        <select name="filterCaught" id="caught" value={filterCaught} onChange={handleChange}>
            <option value="All">All</option>
            <option value="Caught">Caught</option>
            <option value="Uncaught">Uncaught</option>
        </select>

    </div>)
}
 
export default SearchFilter