import React from 'react';
import './Home.css'

const Home = () => {
    const handleAddTask = e => {
        console.log('dfasdefdsafdas')
    }
    return (
        <div>
            <h1 className='title'>Welcome to home page</h1>
            <div>
                <button onClick={handleAddTask} className='btn'>Add task</button>
            </div>
        </div>
    );
};

export default Home;