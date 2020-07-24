import React, { useState } from 'react'


function SearchBox(props){
    const [input, setInput] = useState("")


    function handleChange(event){
        const newValue = event.target.value
        setInput(newValue)
    }

    function handleSubmit(event){
        
        props.submit(input)
        setInput("")
        window.scrollTo(0,0)
        event.preventDefault();

    }
    return <div id="search">
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange} className="search-media" type="search" autoComplete="off" name="searchValue" placeholder="Search for Videos..." />
            <button type="submit" className="btn btn-outline-secondary search-button">Search</button>
        </form>               
    </div>
}


export default SearchBox


