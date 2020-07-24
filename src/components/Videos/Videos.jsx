import React, { useEffect, useState } from 'react'
import Result from './Result'
import SearchBox from './SearchBox'
import axios from 'axios'

function Videos(){

    const [searchTerm, setSearchTerm] = useState("")

    const [videos, setVideos] = useState([]);
    const API_KEY = "17530347-2fa43ec2c758fad8cc3310156";
    const url = "https://pixabay.com/api/videos/?key=" + API_KEY + '&q=' + encodeURI(searchTerm)


    function submit(input){
        setSearchTerm(input)
    }

    useEffect(()=>{

        async function fetchData(){

            const request = await axios.get(url)
            const response = request.data
            setVideos(response.hits)

        }

        fetchData()

    })

    return <div className="images-page">
    <SearchBox submit={submit} />
    <Result videos={videos} heading={searchTerm} />
    </div>
}


export default Videos;