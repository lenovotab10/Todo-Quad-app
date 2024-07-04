import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={() => handleDeleteTask(task.id)} />
      ))}
    </ul>
  );
};

export default TaskList;
