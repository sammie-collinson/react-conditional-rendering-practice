import React from 'react';

const LandingPage = (props) => {
    const { incrementPage } = props
    return (
        <div>
            <h1>Welcome to my Website!</h1>
            <h3>Please click below to sign up.</h3>
            <button onClick={incrementPage}>Sign Up Here</button>
        </div>
    )

}

export default LandingPage;