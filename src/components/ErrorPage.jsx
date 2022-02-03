import React from 'react'

const ErrorPage = (props) => {

    return(
        <div>
            <h1>Excuse me but you must be 21 or older to sign up!</h1>
            <img src="https://i.imgur.com/BfOE9jX.jpg" alt="sad cat"></img>
            <br></br>
            <button onClick={props.decrementPage}>Try Again</button>
        </div>
    )
}

export default ErrorPage;