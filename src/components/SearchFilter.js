import React from 'react'

function SearchFilter(props) {

    return (<div className="search-filter">
        <input type="text" name="searchTerm" value={props.searchTerm} onChange={props.handleChange} placeholder="Search by name" />
        
        <p>Filters:</p>
        <input type="radio" name="filter" id="available" value="available" />
        <label htmlFor="available">Available</label>

    </div>)
}
 
export default SearchFilter