import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './TaskInput.css'

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName('');
    }
  };

  return (
    <div className='row'>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
