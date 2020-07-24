import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from "./SearchBox"
import Result from "./Result"
function Quotes(){

    const [searchTerm, setSearchTerm] = useState("")
    const [quote, setQuote] = useState([])

    const url = "https://quotes.rest/qod?category=" + searchTerm

    function submit(input){
        setSearchTerm(input)
    }

    useEffect(()=>{

        async function fetchQuote(){

            const request = await axios({method: 'GET', url: url, headers: {"Content-type":"application/json"}})
            const response = request.data
            setQuote(response.contents.quotes[0].quote)

        }

        fetchQuote()

    })


    return <div className="quotes-page">
        <SearchBox submit={submit} />
        <Result quote ={quote} heading={searchTerm} />
    </div>
}


export default Quotes;