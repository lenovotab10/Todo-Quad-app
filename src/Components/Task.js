import React from 'react';
import './Task.css'

const Task = ({ task, onDelete }) => {
  return (
    <li>
      {task.name}
      <button  className='del'
      onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Task;
