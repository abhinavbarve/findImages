import React from 'react'

function Result(props){

    return <div className="quotes" >
        <div className="keywords">Categories: * Inspire / Management / Sports / Life / Funny / Love / Art / Students *</div>
        { props.quote.length ===0 ? <div>OOPS! There was no available regarding {props.heading}</div> : 
        
        <div className="quoteBox">
            <div className="quote">    
                
                ❝ {props.quote} ❞
            
            </div>
        </div>
        
        }

    </div>
}

export default Result