import React from 'react';

const Info = () => {
    return(
        <div>
            <h1>Information Form</h1>
            <h4>Please enter your info below...</h4>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name Here"
                 />
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="email"
                    placeholder="Your Email Here"
                    />
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="age"
                    placeholder="Your Age Here"
                />
            </form>
            <br></br>
            <div>
                <button>Back</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Info;