import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

function OrderSelect() {
  const { setOrderButton } = useContext(TaskContext);
  const [selectValue, setSelectValue] = useState('date');

  const handleChange = ({ target }) => {
    const { value } = target;
    setOrderButton(value);
    setSelectValue(value);
  };

  return (
    <div>
      {'Ordenar por: '}
      <select value={selectValue} onChange={handleChange}>
        <option value="date">Data de Criação</option>
        <option value="name">Ordem Alfabética</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}

export default OrderSelect;
