import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function OrderButtons() {
  const { setOrderButton, tasks } = useContext(TaskContext);
  console.log(tasks);
  const nameClick = () => {
    setOrderButton('name');
  };

  const dateClick = () => {
    setOrderButton('date');
  };

  const statusClick = () => {
    setOrderButton('status');
  };

  return (
    <div>
      {'Ordenar por: '}
      <button type="button" onClick={nameClick}>
        Ordem Alfabética
      </button>
      <button type="button" onClick={dateClick}>
        Data de Criação
      </button>
      <button type="button" onClick={statusClick}>
        Status
      </button>
    </div>
  );
}

export default OrderButtons;
