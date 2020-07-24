import React, { useEffect, useState } from 'react';
import axios from 'axios'


function FullImage({match}){
    const id = match.params.id
    const [url, setURL] = useState("")

    useEffect(()=>{

        const API_KEY = "17530347-2fa43ec2c758fad8cc3310156";
        const url = 'https://pixabay.com/api/?key=' + API_KEY + '&id=' + id

        async function fetchURL(){

            const request = await axios(url)
            const response = request.data
            console.log(response.hits[0])
            setURL(response.hits[0].largeImageURL)
            // console.log(response.largeImageURL)
        }
        fetchURL()
    })
    return <div className="full-image">
        {
            url === "" ? 
            <div><h1>Loading...</h1></div> :
            <img src={url}  alt="fullsizeImage" />
        }
        
    </div>
}



export default FullImage;