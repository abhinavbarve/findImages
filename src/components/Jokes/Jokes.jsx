import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from "./SearchBox"
import Result from "./Result"
function Jokes(){

    const [searchTerm, setSearchTerm] = useState("")
    const [jokes, setJokes] = useState([])

    const url = "https://icanhazdadjoke.com/search?term=" + searchTerm + "&limit=30"

    function submit(input){
        setSearchTerm(input)
    }

    useEffect(()=>{

        async function fetchJoke(){

            const request = await axios({method: 'get', url: url, headers: { Accept: "application/json"}})
            const response = request.data
            // console.log(response.results)
            setJokes(response.results)

        }

        fetchJoke()

    })


    return <div className="jokes-page">
        <SearchBox submit={submit} />
        <Result jokes ={jokes} heading={searchTerm} />
    </div>
}


export default Jokes;