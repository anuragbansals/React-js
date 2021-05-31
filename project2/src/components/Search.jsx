import React, { useEffect, useState } from 'react';

const Search = (props) => {

    const [search,setSearch] = useState("")

    useEffect(()=> {
        props.setSearchTerm(search)
    }, [search])

    const handleSearchChange = (events) => {
        setSearch(events.target.value);
        
    }
    return (
        <div className="my-4">
            <input
                type="text"
                className="form-control"
                placeholder="Search Contacts"
                onChange={handleSearchChange}
            />
        </div>
    )
}
export default Search;