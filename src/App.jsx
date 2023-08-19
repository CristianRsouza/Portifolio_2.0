import React, { useState } from 'react';
import './App.css';
import TaskBar from './components/TaskBar/TaskBar';
import TerminalApp from './components/terminal/TerminalApp';
import Chrome from './components/chrome/Chrome';

function App() {
  const [task, setTask] = useState(null); 

  return (
    <div className='DeskTop'>
     
     {task == 'terminal' ? <TerminalApp HandleClose={setTask}/> : null}
     {task == 'chrome' ? <Chrome HandleClose={setTask}/> : null}
     
      <TaskBar HandleTask={setTask} /> 
    </div>
  );
}

export default App;
