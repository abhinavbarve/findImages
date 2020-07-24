import React, { useEffect, useState } from 'react'
import Result from './Result'
import SearchBox from './SearchBox'
import axios from 'axios'

function Images(){

    const [searchTerm, setSearchTerm] = useState("")

    const [images, setImages] = useState([]);
    const API_KEY = "17530347-2fa43ec2c758fad8cc3310156";
    const url = 'https://pixabay.com/api/?key=' + API_KEY + '&q='+ searchTerm + '&image_type=photo&per_page=30'

    function submit(input){
        setSearchTerm(input)
    }

    useEffect(()=>{

        async function fetchData(){

            const request = await axios.get(url)
            const response = request.data
            setImages(response.hits)

        }

        fetchData()

    })

    return <div className="images-page">
    <SearchBox submit={submit} />
    <Result images={images} heading={searchTerm} />
    </div>
}


export default Images;