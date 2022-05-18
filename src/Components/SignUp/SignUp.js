import React from 'react';

const SignUp = () => {
    return (
        <div>
            <label htmlFor="name">Name</label> <br />
            <input type="text" placeholder='Enter your name' />

            <label htmlFor="email">Email</label> <br />
            <input type="email" placeholder='Enter your email' />

            <label htmlFor="name">Name</label> <br />
            <input type="password" placeholder='Enter your password' />
        </div>
    );
};

export default SignUp;