import React from 'react';
import LandingPage from './LandingPage';
import Info from './Info';
import ErrorPage from './ErrorPage';
import Thanks from './Thanks';

const Form = (props) => {
    const { currentPage, incrementPage, decrementPage, name, age, email, handleChange } = props

    let pageSetter;
    if(currentPage===0){
        pageSetter = <LandingPage
            incrementPage={incrementPage}
            currentPage={currentPage}  />
    } if(currentPage===1){
        pageSetter = <Info
            currentPage={currentPage}
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            name={name}
            age={age}
            email={email}
            handleChange={handleChange} />
    } if(currentPage===2 && age>21){
        pageSetter = <Thanks />
    } if(currentPage===2 && age<21){
        pageSetter = <ErrorPage />
    }

    return(
        <div>
            {pageSetter}
        </div>
    )
}

export default Form;