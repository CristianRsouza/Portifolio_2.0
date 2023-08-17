import React, { useState } from 'react';
import './App.css';
import TaskBar from './components/TaskBar/TaskBar';
import TerminalApp from './components/terminal/TerminalApp';

function App() {
  const [task, setTask] = useState(null); 


  return (
    <div className='DeskTop'>
     
     {task == 'terminal' ? <TerminalApp /> : null}
     
      <TaskBar HandleTask={setTask} /> 
    </div>
  );
}

export default App;
