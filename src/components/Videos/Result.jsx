import React from 'react'


function createVideo({id, videos, tags}, index){
    return <div key={id} className="col-md-6 image-col">
        <video width="320" height="240" controls>
            <source src={videos.tiny.url} type="video/mp4" alt={tags[0]}  />
            Your browser does not support the video tag.
            </video>
    </div>
}


function Result(props){

    return <div>
        <h1 className="big-heading">{props.heading} Videos</h1>
        {
            props.videos.length !== 0 ? (<div className="videos row">
            {props.videos.map(createVideo)}
            </div>) : (<div>OOPS! No videos were found regarding {props.heading} </div>)
        }
        
    </div>
}

export default Result