import React from 'react';

const Info = (props) => {
    const { name, email, age, handleChange, incrementPage, decrementPage} = props
    return(
        <div>
            <h1>Information Form</h1>
            <h4>Please enter your info below...</h4>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name Here"
                    value={name}
                    onChange={handleChange}
                 />
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="email"
                    placeholder="Your Email Here"
                    value={email}
                    onChange={handleChange}
                    />
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="age"
                    placeholder="Your Age Here"
                    value={age}
                    onChange={handleChange}
                />
            </form>
            <br></br>
            <div>
                <button onClick={decrementPage}>Back</button>
                <button onClick={incrementPage}>Next</button>
            </div>
        </div>
    )
}

export default Info;