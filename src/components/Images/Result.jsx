import React from 'react'


function createImage({ id, previewURL,largeImageURL, tags}, index){
    return <div key={id} className="col-md-6 image-col">
        <a href={"/images/"+id} ><img id={id} className="renderedImage" src={largeImageURL} alt={tags[0]} /></a>
    </div>
}
function Result(props){

    return <div>
        <h1 className="big-heading">{props.heading} Images</h1>
        {
            props.images.length !== 0 ? (<div className="images row">
            {props.images.map(createImage)}
            </div>) : (<div>OOPS! No images were found regarding {props.heading} </div>)
        }
        
    </div>
}

export default Result