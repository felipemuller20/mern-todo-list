/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task.task}</span>
          {' - '}
          <span>{task.status}</span>
          {' - '}
          <span>{task.date}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
