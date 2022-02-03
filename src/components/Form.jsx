import React from 'react';
import LandingPage from './LandingPage';
import Info from './Info';
import ErrorPage from './ErrorPage';
import Thanks from './Thanks';

const Form = () => {
    return(
        <div>
            <LandingPage />
            <Info />
            <ErrorPage />
            <Thanks />
        </div>
    )
}

export default Form;