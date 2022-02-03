import React from 'react'

const Thanks = (props) => {
    return(
        <div>
            <img src="https://i.imgur.com/N8HPL2a.jpg" alt="thank you"></img>
            <br></br>
            <button onClick={props.returnHome}>Return Home</button>
        </div>
    )
}

export default Thanks;