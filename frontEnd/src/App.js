import React, { useContext } from 'react';
import './App.css';
import TaskContext from './context/TaskContext';

function App() {
  const { tasksByDate, setOrderButton } = useContext(TaskContext);

  const click = () => {
    setOrderButton('teste');
    console.log(tasksByDate);
  };
  return (
    <div>
      <button type="button" onClick={click}>
        Teste
      </button>
    </div>
  );
}

export default App;
