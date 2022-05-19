import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Task.css'

const Task = ({task , handleDeleteTask}) => {
    const {name, description} = task
    // const [compelete , setCompelete] = useState(fasle)
    return (
        <Card style={{ width: '18rem' }} className='task-card'>
        <Card.Body>
          <Card.Title className='name'>
              {name}
              </Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
        </Card.Body>
        <button onClick={() => handleDeleteTask (task._id)}>Delete</button>
        <button className='compelete-btn'>Compelete</button>
      </Card>
    );
};

export default Task;