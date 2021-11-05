import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import getByDate from '../services/tasks';

function TaskProvider({ children }) {
  const [orderButton, setOrderButton] = useState('date');
  const [tasksByDate, setTasksByDate] = useState([]);
  const [tasksByName, setTasksByName] = useState([]);
  const [tasksByStatus, setTasksByStatus] = useState([]);

  const fetchByDate = async () => {
    const apiResult = await getByDate();
    setTasksByDate(apiResult);
  };

  useEffect(() => {
    fetchByDate();
  }, [orderButton]);

  return (
    <TaskContext.Provider
      value={{
        tasksByDate,
        tasksByName,
        tasksByStatus,
        setTasksByDate,
        setTasksByName,
        setTasksByStatus,
        orderButton,
        setOrderButton,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;
