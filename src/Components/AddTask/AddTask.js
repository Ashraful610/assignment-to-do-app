import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Task from '../Task/Task';
import './AddTask.css'

const AddTask = () => {

    const[name , setName] = useState('')
    const [description ,setDescription] = useState('')

    const handleName = event => {
        setName(event.target.value)
    }
    const handleDescription = event => {
        setDescription(event.target.value)
    }

    const handleAddTask = event => {
       event.preventDefault()

        const task = { name , description}
        fetch('http://localhost:5000/task',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('successfully add a task')
        })
    }

    const [tasks , setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/task')
        .then(res => res.json())
        .then(data => setTasks(data))
    },[])

    const handleDeleteTask = id => {
        const procced = window.confirm('Are you sure you want to delete task')
        if(procced){
           const url = `http://localhost:5000/task/${id}`
           fetch(url , {
               method:'DELETE'
           })
           .then(res => res.json())
           .then(() => {
               const remaningFruits = tasks.filter(fruit => fruit._id !== id)
               setTasks(remaningFruits)
           })
        }
    }
    return (
         <div>
             <div className='task'>
                <h2 >Add a new task</h2>

                <label htmlFor="name">Name</label> <br />
                <input name="" placeholder='name' onBlur={handleName} className='input-field' ></input>
            <br /><br />
                <label htmlFor="description"> Description</label> <br />
                <textarea name="" placeholder='description' onBlur={handleDescription} className='field'></textarea>

                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className='tasks'>
                {
                    tasks.map(task => <Task key={task._id} task={task}
                        handleDeleteTask={handleDeleteTask}
                    ></Task>)
                }
            </div>
         </div>
    );
};

export default AddTask;