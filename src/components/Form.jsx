import React from 'react';
import LandingPage from './LandingPage';
import Info from './Info';
import ErrorPage from './ErrorPage';
import Thanks from './Thanks';

const Form = (props) => {
    const { currentPage, incrementPage, decrementPage, name, age, email, handleChange } = props
    return(
        <div>
            <LandingPage />
            <Info
                currentPage={currentPage}
                incrementPage={incrementPage}
                decrementPage={decrementPage}
                name={name}
                age={age}
                email={email}
                handleChange={handleChange} />
            <ErrorPage />
            <Thanks />
        </div>
    )
}

export default Form;