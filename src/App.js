import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formValues, setFormValues] = useState({name: '', age: '', email: ''})

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
    // this uses bracket notation to access a key in state that is a match to the input's name and sets it to the input's value.

  }

  const incrementPage = () => {
    setCurrentPage((prevState) => prevState + 1)
  }

  const decrementPage = () => {
    setCurrentPage((prevState) => prevState - 1)
    if(currentPage===0){ 
      setFormValues({name: '', age: '', email: ''})}
  }

  const returnHome = () => {
    setCurrentPage(0)
  }

  return (
    <div className="App">
      <Form
        currentPage={currentPage}
        name={formValues.name}
        age={formValues.age}
        email={formValues.email}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        handleChange={handleChange}
        returnHome={returnHome} />
    </div>
  );
}

export default App;
