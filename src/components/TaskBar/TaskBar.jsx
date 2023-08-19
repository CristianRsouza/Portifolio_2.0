import React from 'react';
import { TerminalSquare, AppWindow } from 'lucide-react';
import './TaskBar.css';

const TaskBar = ({ HandleTask }) => { 
  return (
    <div className='TaskBar'>
      <TerminalSquare
        className='Task'
        onClick={() => {
          HandleTask('terminal');
        }}
      />
      <AppWindow className='Task' onClick={()=> {
        HandleTask('chrome')
      }}/>
    </div>
  );
};

export default TaskBar;
