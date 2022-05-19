import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    const handleAddTask = e => {
       navigate('/addTask')
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