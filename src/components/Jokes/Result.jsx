import React from 'react'


function Result(props){

    return <div className="jokes" >
        
        {props.jokes.length === 0 ? 
        <div>OOPS! No jokes were found regarding {props.heading} </div> : 
        
        <div>{
            
            props.jokes.map(({id, joke})=> {
            return <div key={id} className="jokeBox"> <div className="joke" key={id}> {joke} </div> <hr className="jokeHr" /> </div>
        
        })
        }
        
        </div>}

        

    </div>
}

export default Result